// Constructor Functions - functions that build objects of the same shape.

// Constructor Functions can be "instantiated" using the "new" keyword to create these objects

Constructor functions are one of the most useful pieces of JavaScript you'll use, and they're prominent in just about every library and framework you'll interact with in one way or another.

Constructor functions (and classes, in Object-Oriented languages) act like **blueprints for creating objects**. It gives you the ability to define the structure for an object once, and use it as a template for creating new objects in the future.

Many times they are compared to blueprints for a house. A home builder will oftentimes use the same set of blueprints to build the basic structure of many houses, and then alter the characteristics of each home (paint color, carpeting or hardwood floors, and perhaps even some smaller structural changes) individually, after the main structure is built.

Similarly, in JavaScript we can use a constructor function to be the main outline of our objects, and change the characteristics of the objects it creates.

### **Example: A Social Media website**

Let's say you want to create a new social media website, and the time has come to define what data you want to collect from your users. In your code, you need a way to accept input from a user and create a new `user` object for every person who signs up for your site.

Every object will be similar in the properties it needs: you want to collect their first name, last name, age, favorite movie, and favorite sport, if they decide to enter it.

In other words, you're planning on having millions of objects stored in the database that all look pretty similar:

```jsx
{
    firstName: <"user first name here">,
    lastName: <"user last name here">,
    age: <user age here>,
    favoriteMovie: <"user favorite movie here">,
    favoriteSport: <"user favorite sport here, if entered">
}

```

Notice how the structure of this object is pretty much decided already? It's just missing the values, waiting for the user to enter their information so the object can be created and saved to the database. This is the ideal time to use a constructor!

### **The Anatomy of a Function Constructor**

As previously mentioned, a function constructor is a JavaScript function, but with a few tweaks to the way we use them normally. Check out the constructor for our `user` objects:

```jsx
function User(fName, lName, age, favMovie, favSport) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.favoriteMovie = favMovie;
    this.favoriteSport = favSport;
}

```

A couple things may stick out right away:

1. The function begins with a capital letter. This isn't strictly required for the constructor to work properly, but it is the widely-adopted convention and should always be followed.
2. The `this` keyword is everywhere!

Remember how the constructor is a "blueprint" for creating objects? Also remember that we can access an object's property by using the `.` (dot) syntax?

```jsx
var person = {name: "Jim"};
console.log(person.name);

```

The problem is we don't want to assign a permanent variable name for every single user that gets created, nor could we really do so if we wanted. (Short of altering the web application's code, manually adding a new object for every single user that signs up... *obviously* out of the question.)

The `this` keyword allows us to refer dynamically to *whichever object is being created with this constructor function*. In other words, it allows us to add properties and methods to any object that gets instantiated with this constructor.

# **Using the constructor**

To use the constructor we need to use JavaScript's `new` keyword, and pass in the actual data we want to save to the user object:

```jsx
var newUser = new User("Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC");

```

`newUser` now has all the properties I want my user objects to have, and all the values that were (supposedly) entered by the user. (In the above example, they're hard-coded in for simplicity's sake).

What if I wanted to create 100 new objects and save them all to an array?

```jsx
var objectArray = [];
for (var i = 0; i < 100; i++) {
    var newObj = new User("Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC");
    objectArray.push(newObj);
}

```

That's it! Of course, all of those objects are identical which is pretty useless, but it should illustrate the power of the function constructor.

# **Methods**

We aren't limited to adding just properties to our objects in a constructor, we can add methods as well:

```jsx
function User(fName, lName, age, favMovie, favSport) {
    ...
    this.speak = function() {
        console.log("Hi! My name is " + this.firstName + " " + this.lastName + " and my favorite movie is " + this.favoriteMovie);
    }
}

```

We can access the other properties of the same constructor by also using `this.propertyName`. If I create a new `User`, I can run the `speak()` method of the user and the output will be specific to that one user.

```jsx
var jill = new User("Jill", "Hill", 12, "Jack and the Beanstalk", "Climbing");
jill.speak();  // prints "Hi! My name is Jill Hill and my favorite movie is Jack and the Beanstalk".

```

### **Caveat: prototypes**

The above way of adding methods to objects in a constructor is generally considered to be bad practice. It is better to instead add the methods to the `prototype` of the constructor. Check out our writeup on [Prototypes and Prototypal Inheritance](https://coursework.vschool.io/prototypes/) to better understand why. But as a quick reference, this is how you would do that:

```jsx
function User(fName, lName, age, favMovie, favSport) {
    this.firstName = fName;
    ...
    }
}

User.prototype.speak = function() {
        console.log("Hi! My name is " + this.firstName + " " + this.lastName + " and my favorite movie is " + this.favoriteMovie);
}

var jill = new User("Jill", "Hill", 12, "Jack and the Beanstalk", "Climbing");
jill.speak();  // Still prints "Hi! My name is Jill Hill and my favorite movie is Jack and the Beanstalk".

```

# **Conclusion**

There is a lot more to learn about constructors, and understanding when it's best to use them takes time and experience. But for now you should have enough knowledge to start practicing with them and using them in your everyday code!