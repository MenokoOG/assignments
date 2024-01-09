You may have heard that JavaScript isn't a traditional Object-Oriented language like C#, Java, Python, Ruby, etc., and that's true. JavaScript uses a more powerful and flexible system called Prototypes.

At first glance, prototypes may seem complicated, but after spending some time digging into the concept you'll see that it's actually quite simple. On top of its simplicity, one could use the prototypal model to implement their own classical inheritance model pretty easily.

Everything in JavaScript is an object
When we first start the class, we distinguish between data types such as strings, numbers, booleans, functions, objects, and arrays. But under the hood, JavaScript implements everything as an object! In hindsight, this might make a lot of sense - this is why you've been able to use dot syntax on strings and arrays so far! E.g.:

var name = "Tony Stark";
console.log(name.length);  // 10
console.log(name.split(""))  // ['T','o','n','y',' ','S','t','a','r','k']

// Might be even easier to see if you don't set the variable first:
console.log("Iron Man".length);  // 8
Dot syntax is a dead giveaway that something is an object, and in JavaScript, everything is an object. When you learned about constructor functions, you learned that you can use a constructor function to create a new object by using the new keyword, right? You may also have seen code like this on some blog or Stack Overflow:

var name = new String("Bruce Banner");
var isScientist = new Boolean(true);
I think you get the point.

Prototypes are just another object
And they're not even a weird kind of object, they're object literals. (Think {}). Any object can serve as a prototype to another object. Think in terms of a mentor and a mentee: as a mentee, you look up to your mentor for advice. A prototype serves a similar purpose. Any object that has a prototype may look up to its prototype for any properties or methods that it, itself, doesn't possess. If the prototype has the specified property, the "child" object can borrow it temporarily. Borrowing a property or method from a prototype doesn't give the child object that property/method permanently.

Obligatory cat example:

var cat = {
    sound: "meow"
}

cat.speak();  // error: cat.speak is not a function

var animal = {
    sound: "generic soundssss"
    numLegs: 4,
    speak: function() {
        console.log(this.sound);
    }
}

// Tells the cat object to look to the animal object if it needs to borrow any properties or methods.
Object.setPrototypeOf(cat, animal); 
// From the docs: it's not a good idea to use this method. We're just using it
// for simplicity in understanding the principles.

cat.speak();  
// "meow" - notice that it is able to maintain its own `sound` property rather than
// having to borrow that part from the animal. Only borrows what it needs,
// the `speak` method, but uses its own sound property when console logging this.sound.

cat.numLegs;  // 4. This is also borrowed from its prototype, the animal object.
As you can see, a prototype is just an object that is able/willing to lend its properties and methods to another object.

Prototype chain
Another cool feature of prototypes is that if an object's direct prototype doesn't have a method or property it can borrow, that prototype will look to its prototype for the method or property. The connection from one prototype to another is called the prototype chain. Eventually, the prototype chain works its way up to the built-in Object constructor. If a method call from an object low in a prototype chain makes its way all the way up to Object and can't find a reference to that method, a reference error will be thrown. Let's look at yet another contrived example:

var electronicDevice = {
    internalBattery: true
};

var smartPhone = {
    provider: "Verizon",
    makeCall: function() {
        console.log("Ring rinnnnggg!");
    }
};

var iPhone = {
    make: "Apple",
    model: "iPhone 7",
    hardDrive: "64GB"
};

Object.setPrototypeOf(iPhone, smartPhone);  // `smartPhone` is now the prototype object to `iPhone`
Object.setPrototypeOf(smartPhone, electronicDevice);  // `electronicDevice` is now the prototype object to `smartPhone`

// When iPhone can't find the specified property or method on itself, it looks to its prototype.
// When the prototype can't find the property, it looks to ITS prototype, and so forth up the chain

console.log(iPhone.internalBattery);  // true
console.log(iPhone.makeCall());  // "Ring rinnnnggg!"
The real way to create objects with prototypes
We're told we shouldn't actually use Object.setPrototypeOf() in real production code - it's mostly a way to play with prototypes in practice. The real way to set the prototype of an object is to use Object.create(). This method both creates a new object and sets that new object's prototype all in one method.

The first parameter is the object you want to set as the prototype of the new object, and the second parameter is the new object you want to create. The method then returns the new object with the prototype set correctly:

var electronicDevice = {
    internalBattery: true
};

// Create a new object and set its prototype to `electronicDevice`
var smartPhone = Object.create(electronicDevice);
smartPhone.provider = "Verizon";
smartPhone.makeCall = function() {
    console.log("Ring rinnnnggg!");
};

// Create a new object and set its prototype to `smartPhone`
var iPhone = Object.create(smartPhone);
iPhone.make = "Apple";
iPhone.model = "iPhone 7";
iPhone.hardDrive = "64GB";
While we don't necessarily need to add the properties one at a time after the Object.create() line, the alternative is much more complex, gives you more fine-grained control over the resulting object, and is outside the scope of this post. Check out the MDN docs on Object.create() for more information.

hasOwnProperty
The prototype chain can make everything seem pretty flattened out. From the above example, we know that iPhone can make use of the prototype chain to call methods and properties outside itself, but what if we need to know if an object has its own property or method?

As mentioned before, every object in JavaScript chains up to the Object constructor. The Object constructor has one final prototype object where all of the built-in methods we use on objects come from. One of those is hasOwnProperty.

The purpose of hasOwnProperty is to give us a way to know if an object has its own property, or if that property might possibly be coming from a prototype (or if the property doesn't exist at all on the prototype chain of that object).

In the above example with the smart phones:

iPhone.provider;  // "Verizon" (comes from the `smartPhone` object)
iPhone.hasOwnProperty("provider");  // false
iPhone.hasOwnProperty("blahblah");  // false (hasOwnProperty doesn't check if it's on the prototype chain)
Constructor Prototypes
There is a lot of power in being able to create individual objects and set up a prototype chain. However, there are instances where you may want to use the idea of prototypal inheritance to build your own construct similar to a class-based system. Due to JavaScript's prototype-based system, this is possible and fairly simple to do.

Before getting too excited to create an inheritance model similar to other OOP languages, check out the video below first to learn about why many developers are moving away from an inheritance model and towards a "composition" model instead.


Oftentimes, though, you'll want to create many objects that all have the same prototype, and creating them individually like we did above isn't an option. This is where constructor prototypes come in to the picture!

First, let's look at the following code to figure out what problems it has:

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.speak = function() {
        console.log("Meow! My name is " + this.name);
    }
}
Think about the objects this constructor will create - every single object will have its own name, breed, and speak method. But currently the speak method will be identical to every other cat that gets created. If we use this constructor to make a million cats, they'll each require a speak method in memory, even though the method is identical across each of them.

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.speak = function() {
        console.log("Meow! My name is " + this.name");
    }
}

var cat1 = new Cat("Fluffykins", "Tabby");
var cat2 = new Cat("Mr. Whiskers", "Munchkin");
console.log(cat1.speak === cat2.speak);  // false, because they occupy different positions in memory

// They still show up as identical though
console.log("" + cat1.speak);  // function () { console.log("Meow! My name is " + this.name) }
console.log("" + cat2.speak);  // function () { console.log("Meow! My name is " + this.name) }
Every constructor function has a property called .prototype. This property points to an object that should be used as the prototype for every object that gets created with this function. And since Cat.prototype is an object, I can add properties and methods to it that I want to be shared amongst all cats created with this constructor. And JavaScript is smart enough to maintain the correct reference to this when used in the method, even when that method is shared between other objects. So now I can use .prototype to refactor my code to be more efficient:

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

Cat.prototype.speak = function () {
    console.log("Meow! My name is " + this.name);
};

var cat1 = new Cat("Fluffykins", "Tabby");
var cat2 = new Cat("Mr. Whiskers", "Munchkin");
console.log(cat1.speak === cat2.speak);  // true!

cat1.speak();  // Meow! My name is Fluffykins
cat2.speak();  // Meow! My name is Mr. Whiskers

// We can see that the prototype is a simple object now with just one method: speak
console.log(Cat.prototype);  // { speak: [Function] }
In general, when creating a constructor function, you should put all of that constructor's methods on the prototype instead, so as to take advantage of the benefits of the prototype chain.

Setting up Inheritance Between Constructors - ES5
We can combine a number of the ideas in this post to create a more traditional, OOP inheritance model. Say you've got the constructor for a Cat from the above example (plus a few things):

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.numLegs = 4;
    this.hasTail = true;
}

Cat.prototype.speak = function () {
    console.log("Meow! My name is " + this.name);
};

Cat.prototype.nap = function () {
    console.log("Prrrrrr.");
};
But your business needs require you to start making more specific kinds of cats, namely:

function NyanCat(name, popTartFlavor) {
    this.name = name;
    this.breed = "Nyan";
    this.numLegs = 4;
    this.hasTail = true;
    this.popTartFlavor = popTartFlavor;
}

NyanCat.prototype.speak = function () {
    console.log("Meow meow meowmeow meowmeowmeow");
};
Right now, these are two completely separate constructors. If I create a new NyanCat(...), it won't be able to call the Cat's nap method, because we haven't connected the two in the prototype chain.

Let's connect them using prototype and Object.create()!

function NyanCat(name, popTartFlavor) {
    ...
}

NyanCat.prototype = Object.create(Cat.prototype);

NyanCat.prototype.speak = function () { ... };
See what we did there? NyanCat.prototype = Object.create(Cat.prototype). By default, a new constructor's prototype property is an empty object. What we did instead was create a new object using Object.create() and set that new object (the NyanCat's prototype) to have a prototype of the Cat's prototype! That way if NyanCat doesn't have a method, and even its own prototype doesn't have a method, it will look up once more to the Cat's prototype too before giving up!

That line can be pretty tricky to understand, but if you think about it long enough it'll click eventually.

Note: It's important that we run NyanCat.prototype = Object.create(Cat.prototype) before adding methods to NyanCat.prototype. Otherwise, Object.create() will just reset the object.

There's another line we have to add when setting up inheritance. The reason for it is outside the scope of this post, so for now just know that you'll also need to add NyanCat.prototype.constructor = NyanCat.

Here's the current state of our code:

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.numLegs = 4;
    this.hasTail = true;
}

Cat.prototype.speak = function () {
    console.log("Meow! My name is " + this.name);
};

Cat.prototype.nap = function () {
    console.log("Prrrrrr.");
};

function NyanCat(name, popTartFlavor) {
    this.name = name;
    this.breed = "Nyan";
    this.numLegs = 4;
    this.hasTail = true;
    this.popTartFlavor = popTartFlavor;
}

NyanCat.prototype = Object.create(Cat.prototype);
NyanCat.prototype.constructor = NyanCat;

NyanCat.prototype.speak = function () {
    console.log("Meow meow meowmeow meowmeowmeow");
};
Constructor.call(...)
Currently, this code isn't all that DRY; the NyanCat is repeating a lot of the properties of Cat. And if, in the future, we add properties to Cat that we also want NyanCat to have, we'd have to add them in 2 places. Let's fix that with the .call() method:

function NyanCat(name, popTartFlavor) {
    Cat.call(this, name);
    this.breed = "Nyan";
    this.popTartFlavor = popTartFlavor;
}
Cat.call(this, name) essentially says "Before we move on, let's execute the Cat function and pass the current NyanCat we're creating (this) to that function. Every time the Cat function says this.<whatever>, it'll use this instance of the new NyanCat instead, decorating it with all the properties found in the Cat constructor function."

After that, we reset the breed property to "Nyan" (otherwise it would be undefined since we didn't pass it to Cat.call(...)) and set any other properties we want that are specific only to NyanCats. This saves us potentially a lot of code and makes our NyanCat more flexible to changes to Cat in the future.

Finally, here's the final state of our code, along with some proof that things are working as expected:

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.numLegs = 4;
    this.hasTail = true;
}

Cat.prototype.speak = function () {
    console.log("Meow! My name is " + this.name);
};

Cat.prototype.nap = function () {
    console.log("Prrrrrr.");
};

function NyanCat(name, popTartFlavor) {
    Cat.call(this, name);
    this.breed = "Nyan";
    this.popTartFlavor = popTartFlavor;
}

NyanCat.prototype = Object.create(Cat.prototype);
NyanCat.prototype.constructor = NyanCat;

NyanCat.prototype.speak = function () {
    console.log("Meow meow meowmeow meowmeowmeow");
};


var nyan = new NyanCat("Bub", "Strawberry");
console.log(nyan.breed);  // "Nyan"
console.log(nyan.popTartFlavor);  // "Strawberry
console.log(nyan.numLegs);  // 4
nyan.speak();  // "Meow meow meowmeow meowmeowmeow"
ES6 Classes
We won't go into how ES6 simplifies the process of setting up inheritance between constructors in this post (check out our post on Classes for more info on that), but this is a good time to point out that the class keyword in ES6, under the hood, is simply doing this exact same thing we just did above. There are no true "classes" in JavaScript, and the new class keyword can be misleading for newer developers who don't really understand how prototypes work.

Conclusion
It's okay if this stuff doesn't sink in right away. Most new developers take awhile to really understand JavaScript's prototype-based structure. Spend time playing in code with the above examples, and then try coming up with examples of your own! You'll find that it'll start to make sense quickly the more you use it.