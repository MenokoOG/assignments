# **Arrow Functions**

Arrow functions simplify the **syntax** of our traditional functions.

They use symbols that make intuitive sense to help make our functions simpler.The old way of writing functions:

```jsx
const add = function(a, b){
    return a + b;
}

```

With arrow functions, we can remove the function key word, and add an arrow comprised of `=` and `>`.

```jsx
const add = (a, b) => {
    return a + b;
}

```

Cool, our function is already simpler. This syntax makes sense. It's like saying "I'm going to take a and b and transform them." Right? And arrow suggests transportation, transformation, forwarding, moving, etc. "I'm going to take a and b and 'arrow' them."

But wait, there's more!!

We can simplify it some more. If your function has a single expression. Or a single line of code in the function, you can remove the curly brackets and `return` keyword

```jsx
const add = (a, b) => a + b;

```

This is called an implicit return.

The rule is, if you have a just one expression in your function, remove both the curly brackets **and** the `return` keyword.

If you only have **one** argument, you can also drop the parentheses!

```jsx
const double = (num) => num * 2;

```

can be written:

```jsx
const double = num => num * 2;

```

If there are zero arguments, you need the parentheses.

```jsx
const logHello = () => console.log("hello");

```

Arrow functions start to look especially sexy when used as anonymous callback functions.

```jsx
const numbers = [1, 2, 3]

numbers.map(function(number) {
    return 2 * number;
});

```

can be:

```jsx
const numbers = [1, 2, 3]

numbers.map(number => 2 * number);

```

This is possible because we are using arrow functions and `.map()` instead of a for loop.

# **Object Shorthand**

Object literal syntax is just a way to make our code look nicer. To show how to use this, we will just look at the old/uglier way of doing things, and then see the ES6/prettier way of doing things.

There are three different shorthand syntaxes for objects in ES6. ES6:

1. Provides a shorthand syntax for initializing properties from variables.
2. Enables the ability to have computed property names in an object literal definition.
3. Provides a shorthand syntax for defining function methods.

```jsx
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };

```

can now be

```jsx
const red = '#ff0000';
const blue = '#0000ff';

const colors = { red, blue };

```

The old way:

```jsx
const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields: fields };

```

Can now be:

```jsx
const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

```

The old way:

```jsx
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 / 16;
  return {
    width: width,
    height: height
  };
}

```

Can now be:

```jsx
const canvasDimensions = (width, initialHeight) => {
  const height = initialHeight * 9 / 16;
  return {
    width,
    height
  };
}

```

**Methods**Methods in an object no longer need to have the `function` keyword. To facilitate this, we drop the `:` too.

This

```jsx
const color = 'red';

const car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

```

Can now be:

```jsx
const color = 'red';

const car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};

```

# **Destructuring**

As we've found, the easiest way to learn the new ES6 syntax is to see the old way of writing JavaScript.

```jsx
const expense = {
  type: "Business",
  amount: "$45 USD"
};

const type = expense.type;
const amount = expense.amount;

```

ugh. So much redundancy! We have `const`, `type`, and `amount` written three times. Using our old object, we can assign `type` and `amount` in a better way using curly-brackets.

```jsx
const {type} = expense;
const {amount} = expense;

```

Variable names need to be identical to property names.

We can boil this down even a little further.

```jsx
const { type, amount } = expense;

```

We will often times see this syntax when importing specific parts of a file. Look forward to the next section to see examples of this.

### **Destructuring Arrays**

we can make this code:

```jsx
const vegetables = ["carrit", "tomat", "tomato soup"];

const firstVegetable = vegetables[0];

```

a lot prettier using square-brackets like this

```jsx
const [ firstVegetable ] = vegetables

```

Notice the use of square-brackets vs the curly-brackets we were using before.

ES6 pulls the first item from the `vegetables` array, and assigns it to the `firstVegetable` variable. You can assign the first few like so:

```jsx
const [ firstVegetable, secondVegetable ] = vegetables

```

### **Destructuring arrays and objects together**

We are going to use two sets of destructuring in the last line of this snippet.

```jsx
const people = [
  {name: 'Bob', age: 31},
  {name: 'Joe', age: 29},
  {name: 'Ben', age; 42}
];
const [{ name }] = people

```

We start on the outside and go in, so name would equal `Bob`

### **Practical Examples**

There are many times were we need to change our data structures. Destructuring is **extremely** useful for this.

Let's assume we have a grid of points:

```jsx
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
]

```

but we are working with a graphing library that wants an array structured like this:

```jsx
[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 }
]

```

To transform our data, we could use a for loop. But let's not risk looking like an ES6 noob. Let's go step by step. Each one of these steps would work, but we'll simplify our code bit by bit. In every step of the way, and this first example especially, try to use destructuring to simplify the code.

```jsx
points.map(point => {
  const x = point[0];
  const y = point[1];
});

```

```jsx
points.map(point => {
  const [ x, y ] = point;
});

```

```jsx
points.map(([ x, y ]) => {
  return { x: x, y: y };
});

```

now, finally:

```jsx
points.map(([ x, y ]) => {
  return { x, y };
});

```

**One more example**Often we will use this to import specific parts of a package. All three following examples would do the exact same thing:

```jsx
import { createStore } from "redux";

```

```jsx
let { createStore } = require("redux");

```

```jsx
let createStore = require("redux").createStore

```

Don't let import `intimidate` you, we'll talk about it later.

### **Practice**

This takes a lot of practice. Try each of these examples on your own before looking at the solution.

Use destructuring to simplify this ES5 code:

```jsx
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  const title = profile.title;
  const department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

```

answer in ES6:

```jsx
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

const isEngineer = ({title, department}) => title === 'Engineer' && department === 'Engineering';

```

# **Default Parameters**

Often times, we want to write a function with a default argument. For example, you have a function that returns the square inches of a piece of wood. Most of our boards are an inch think, but occasionally they are more. Thickness in this function would default to `1`. To write this function in a way that sets thickness to `1`, we used to need to say:

```jsx
function calculateSquareInches(width, length, thickness){
    if (thickness === undefined){
        thickness = 1;
    }
    return width * length * thickness;
}

```

In this example, we have an entire `if` block to see if a value for thickness was passed through and to assign it to it's default if it wasn't.

But now we can write:

```jsx
function calculateSquareInches(width, length, thickness = 1){
    return width * length * thickness;
}

```

It only assigns thickness to 1 if a third parameter wasn't passed through. Be sure to write all defaults as the last arguments when defining your functions.