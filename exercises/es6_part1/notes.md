Much of ES6 is syntactic sugar.

"Syntactic sugar means that the new features of the language are not really new. Instead, they are a nicer syntax for something existing" - [stackoverflow](https://stackoverflow.com/questions/50835572/what-is-syntactic-sugar-in-javascript)

This means that the code becomes more readable, and often times sheds unnecessary syntax. Pay attention to how the new key words and arrangements of characters would help clean up our code, help in the development process, or read more like English.

# **Const and Let**

### **What is Const and Let?**

We've historically defined variables using `var`

```jsx
var name = "Bob Evans";

```

In ES6, we never need to use `var` again. It is going to be best practice to only use `let` and `const`.

`const` is used to declare variables that will **never** be re-assigned.

`let` is used to declare variables where the value could change at some point.

```jsx
const name = "Bob Evans";
let address = "123 Fake Street";

```

### **Why use `const` and `let`?**

In complex JavaScript programs, we will be using many variables. Because of these new variable declarations key words, `let` and `const`, we have more control over those variables.

`Const` and `let` also makes our code more readable. We can explicitly show what variables we expect to be altered, and which variables should stay the same.

For example, imagine we are writing a program to identify vowels. We would use `const` to declare the array of vowels because vowels will never change. They will always be: a, e, i, o and u.

```jsx
const vowels = ["a", "e", "i", "o", "u"];

```

### **Scoping of Const and Let vs. Var**

Another important thing to understand about `const` and `let` is that they are locally scoped whereas `var` is globally scoped.

For example:

```jsx
function localScope(){
  if(2 === 2){
    let local = 'dog'
  }
  return local;
}
localScope()

//returns 'local' is undefined

```

but if it were the same function using var:

```jsx
function localScope(){
  if(2 === 2){
    var local = 'dog'
  }
  return local;
}
localScope()

//returns 'dog'

```

### **Practice**

change all the following `var`s to either `const` or `let`

```jsx
var name = "Ben";
var age = 24;
var dateOfBirth = "feb";

var statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

```

# **Rest and Spread Operator**

### **Rest Operator**

Often times we want all our arguments to be an array of arguments. We don't know how many arguments will be passed into our function, but we want them to be an array in our function. We do that using the **rest** operator. `...whatWeWillNameOurArray`

```jsx
function addNumbers(...numbers) {
  // numbers is now an array that we can use .reduce() on
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8);

```

### **Spread Operator**

In this example, we will have two arrays that we want to be joined into one. Before, we would have had to use `.concat()`.

```jsx
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors);

```

Now we can do this.

```jsx
[ ...defaultColors, ...userFavoriteColors ];

```

The ES6 way is much easier to read and identify quickly was is being done.

Not only that, but now we can add more that two arrays.

```jsx
[ ...defaultColors, ...userFavoriteColors, ...fallColors ];

```

We aren't done yet! We can also just add values!

```jsx
[ "blue", "green", ...defaultColors, ...userFavoriteColors, ...fallColors ];

```

Let's write a shopping list validator that always includes milk. We will check for milk, and add it to our array if it's not there.

```jsx
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

```

### **Practical example of Rest and Spread.**

Let's assume we have a library with a depreciated method. We would like users of our library to use a better method, but don't what to break the code of people still using the old method.

```jsx
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
   }
};

```

We just pass on all of the arguments straight into the call of the new method. The arguments do get turned into an array, but then "spread" out and dumped into the new method and individual parameters.

Try to make the following function more ES6xy:

```jsx
function product(a, b, c, d, e) {
  const numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

```

Do this one too. Use at least **both** the **rest and spread** operators:

```jsx
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

```

# **Template Literals**

These are designed for making our strings easier to read and write.

They utilize the "back tick." This symbol -> `. It's just left of the "1" on your keyboard. We put our entire string inside two back ticks, and we use a dollar sign and curly brackets to insert JavaScript variables and expressions into.

We used to concatenate strings like so:

```jsx
let name = "Jacob";
let age = 20;
console.log("hello, my name is " + name + " and I am " + age + " years old.");

```

but now we can use the following syntax:

```jsx
console.log(`hello, my name is ${name} and I am ${age} years old.`);

```

This is easier to read and write, we can easily identify where the JavaScript variables are, and it takes up less room. All those quotes and "+"s in the old way are way to easy to mess up. Start using the ES6 way!

You can also insert JavaScript expressions into the curly brackets.

```jsx
console.log(`hello, my name is ${name}. Next year, I will be ${age + 1} years old`);

```

# **Import/Export**

Before we would `require` npm packages or other files from our project. Now, we use the `import` syntax.

```jsx
import axios from 'axios';

```

Is the same as saying

```jsx
const axios = requre('axios');

```

We can also "unpack" only the methods or items that we need from the package or file.

```jsx
import { Component } from 'react';

```

### **Export**

Export is generally the same, except you can export multiple items. When this file gets imported, all these items will be packaged into the imported object.

You no longer say:

```jsx
module.exports = codeOrFunctionOrObjectOrWhatever;

```

but instead say:

```jsx
export codeOrFunctionOrObjectOrWhatever;

```

You can export however many items you'd like, and when they are imported, the import statement can specify which item it wants imported. You can also have an `export default` which will be exported if the import statement doesn't specify what it wants.

```jsx
export default codeOrFunctionOrObjectOrWhatever;
```