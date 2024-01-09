#String Methods

* Methods are functions and describe the "doing" words for javascript data types.
* String methods are simply the pre-built javascript functions for strings.
* Methods are used using the dot " . " notation followed by the "()" parenthesis to execute the method.


Methods are functions that are defined within the scope of an object. When people say function they are typically referring to a function on the global scope, whereas a method is part of the local scope of an object.

For example.

```jsx
//global Function
function doSomething () {
    console.log("I'm doing something")
}

doSomething(); // this can be called directly

//method
var someObj = {
    name: "John",
    age: 23,
    speak: function (){
    console.log("I'm speaking")
}
};

someObj.speak(); // this has to be called as part of the object someObj

```

Primitive values are not objects so they typically cannot have properties or methods. But JavaScript automatically converts primitives to String objects, so that it is possible to use methods on strings.

Methods are extremely useful because they are basically like shortcuts or cheat codes that we can use to manipulate our code without having to write whole functions for each specific thing we want to do.

One string method is string.toUpperCase()This returns the string value converted to uppercase.

So instead of writing out a whole function that changes your string to uppercase letters all you have to do is this

```jsx
var str = 'hello';
var upperStr = str.toUpperCase();
console.log(upperStr); //prints 'HELLO' to the console

```

Some common string methods are

.concat()

combines the text of one or more strings and returns a new string

```jsx
var str = 'hello ';
var str2 = 'world';
var fullStr = str.concat(str2);
console.log(fullStr); // prints 'hello world'

```

.indexOf()

returns the index of the specified value, or -1 if not found

```jsx
var str = 'hello world';
var oIndex = str.indexOf('o');
console.log(oIndex); //prints 4

```

or you can specify which instance of the specified value you want

```jsx
var str = 'hello world';
var oIndex = str.indexOf('o', 5); //finds first index of 'o' starting at the index 5
console.log(oIndex); //prints 7

```

.slice()

removes a section of a string and returns a new string

```jsx
var str = 'hello world';
var newStr = str.slice(6);
console.log(newStr); // prints 'world'

```

or you can grab just a middle section

```jsx
var str = 'heyyoudude';
var newStr = str.slice(3,6);
console.log(newStr); // prints 'you'

```

or you can go from the back

```jsx
var str = 'hello world';
var newStr = str.slice(-5);
console.log(newStr); // prints 'world'

```

.split()

splits a string into an array of strings by separating the string into substrings

```jsx
var str = 'hello I am john, I am a real human being';
var words = str.split(' '); // splits by every space
var lines = str.split(','); // splits by every ,
var allChar = str.split(''); // splits by every character

console.log(words);//prints[ 'hello', 'I', 'am', 'john,', 'I', 'am', 'real' ]
console.log(lines);//prints[ 'hello I am john', ' I am real' ]
console.log(allChar);//prints[ 'h','e','l','l','o',' ','I',' ','a','m',' ','j','o','h','n',',',' ','I',' ','a','m',' ','r','e','a','l' ]

```

.toLowerCase()

Returns the string changed to lower case

```jsx
var str = 'HelLo WorlD';
var lowStr = str.toLowerCase();
console.log(lowStr); // prints 'hello world'

```

A list of all the methods can be found here

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String