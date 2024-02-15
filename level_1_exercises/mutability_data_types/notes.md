// Mutability - the ability to change (mutate) a peice of data

    // Immutable - cannot be changed
        String
        Number
        Boolean
        
    // Mutable - can be changed
        Array
        Object
        
// The 'typeof' operator will return the type of the data immediately to its right
    // ex:
        var name = "steve"
        console.log( typeof name ) // "string"

 Although this post doesn't cover concepts you'll necessarily need to understand on a day-to-day basis, the information it presents could potentially help you understand a bug that would otherwise be *very* difficult to debug.

# **Value Types**

Every *thing* in JavaScript is one of two value types: **primitive** or **reference** type. In JavaScript, the following are all **primitive** types:

- strings (`"this is a string"`)
- numbers (e.g.: `3.14` or `42` or `NaN`)
- booleans (`true` or `false`)
- `undefined`
- `null`

and the following are **reference** types:

- Arrays
- Objects
- Functions

Before we dive into why this is useful, let's also tackle another definition.

# **Mutability**

The word *mutable* stems from *mutate* - which of course means to change. In JavaScript, the above-mentioned primitive data types are all considered "immutable", or unable to change. Conversely, the reference data types are mutable, or *able* to change.

### **What exactly are variables?**

To better understand this, we first need to understand what variables really are. All a variable does is point to a place in memory where the actual data is being saved. Consider the following example:

```jsx
var myNumber = 42;
myNumber = 43;
console.log(myNumber);  // prints 43

```

On the first line, I saved `42` to memory and set up a pointer to that place in memory with the data, the number 42.

!https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-19-at-1-56-40-PM.png

So what exactly is happening when I run the line `myNumber = 43`? This is what some may think:

!https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-19-at-2-02-00-PM.png

At first glance, it may seem like I mutated `myNumber`, changing the number 42 to 43. In reality, what really happened was I reset where the variable `myNumber` points to in memory. For example, I could also have said `myNumber = true`, and that doesn't mean I *changed* the value of the number `42`. This is what actually happens when I run `myNumber = 43`:

!https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-19-at-2-09-29-PM.png

The reference (pointer) to the original place in memory where the number 42 was being stored is removed and a new pointer is created pointing instead at the number 43 and its place in memory. When JavaScript finds that the `42` no longer has anything pointing to it, it *garbage collects* the 42, removing it entirely and frees up the memory that was being taken up.

### **Immutable types**

In JavaScript, all value types (strings, numbers, booleans, `undefined`, and `null`) are immutable.

Hopefully it makes some sense that numbers and booleans are immutable, but what about strings? Since I can index into a string as if it were an array, it seems intuitive that I should be able to change any given letter to another letter and keep that data at the same address in memory. Consider this example:

```jsx
var myString = "pool";
console.log(myString[0]);  // prints "p"
myString[0] = "t";  // I expect this to change myString to "tool"
console.log(myString);  // prints "pool"

```

We can see that strings are also *immutable!* If I want to "change" a string, I'll need to reset the pointer to another place in memory, creating a new string. This is why you'll see things like:

```jsx
...
myString = myString + "!";
// And the shorthand version of this is myString += "!"
...

```

With the `=`, we're *re-assigning* the variable to another value, which is the old version of `myString` plus an `!` on the end. We haven't mutated the original string, we've reset where the variable points to!

!https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-19-at-2-20-02-PM.png

### **What do *mutable* types look like?**

JavaScript's **reference types** (arrays and objects) are mutable. I can change the actual data itself without resetting its position in memory.

```jsx
var fruits = ["orange", "apple"];
fruits[0] = "mango";
console.log(fruits);  // prints ["mango", "apple"]

```

!https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-19-at-2-39-59-PM.png

The same goes for **objects**:

```jsx
var myCar = {
    year: 2002,
    make: "Toyota",
    model: "Camry"
}
console.log(myCar.year)  // prints 2002
myCar.year = 2016;
console.log(myCar.year)  // prints 2016

```

The object mutated without needing to move its place in memory. In other words, it *changed in place*.

# **Pass by Value vs. Pass by Reference**

This is what we've been leading to: understanding how variables pass their values to other variables.

### **An analogy**

A good analogy to help understand the difference is to think of how you share a web page with a friend. If you wanted to follow the "pass by value" method, you would print out a copy of the web site and give it to your friend. If the owner of the website changes the original website, you friend's copy won't change at all. Similarly, if your friend writes all over the printed copy of the web site, the original site won't change.

On the other hand, if you wanted to follow the "pass by reference" method, you would give your friend the URL of the web site. That URL is simply a *reference* to the actual web site. Anyone with the link *will* see changes that the site owner makes every time they visit the page.

### **In code**

In JavaScript, the **value types** (strings, numbers, booleans, `undefined`, and `null`) pass their data **by value**. Check out the following example:

**Pass by Value**

```jsx
var a = 30;
var b = a;
console.log(b);  // prints 30
a = 40;
console.log(b);  // what do you think it will print?

```

Remember, *pass by value* means that a copy is made, and changes to the original don't affect the copies. The code above produces the following output:

```jsx
30
30

```

On the other hand, **reference types** (arrays and objects) pass their values **by reference**. You can see this in the following example:

**Pass by Reference**

```jsx
var person = {
    name: "Susan",
    age: 43,
    eyeColor: "blue"
};
var another = person;
person.age++;
console.log(another.age);
another.age++
console.log(person.age);

```

Since `person` is pointing to an object in memory, when I make `another` variable pointing to the `person` variable, it passes its data (the person object) by reference! So any change to the object via one variable is reflected to any other variable pointing to the same object (or array).

!https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-19-at-3-15-19-PM.png

# **Conclusion**

This is some basic-level computer science, and understanding could help you immensely when the time comes to understand why an object is seemingly changing itself at random (could turn out another variable pointing to the same object is changing it), or understanding why something isn't changing when you think it should (perhaps it is an immutable data type you're trying to change).       