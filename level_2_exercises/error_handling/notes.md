

When running JavaScript errors can occur. These can be made by mistakes in programming, unexpected values in input and other errors. To handle these errors the JavaScript programming language has these tools.

The **try** keyword allows us to test blocks of code

```jsx
try {
  //your code
}

```

The code within the **try** will run normally unless an error is thrown.

The **catch** keyword lets you handle an error that is thrown in the **try** block.

```jsx
try {
  //your code
} catch(err) {
  console.log(err);
  //handle error
}

```

Examples of some errors**SyntaxError**

```jsx
varx foo = "bar";

```

**ReferenceError**

```jsx
var x = 1;
console.log(y);

```

If you would like a full list of errors checkout [MDN's list of errors](https://www.google.com/).

But if the built-in errors don't describe the error you have in your program you can make a custom error with the **throw** keyword.

```jsx
throw "This is my custom error";

```

The **finally** keyword allows you to run code after your **try** and **catch** whether an error occurs or if the code just runs fine.

```jsx
try {
  //your code
} catch(err) {
  console.log(err);
  //handle error
} finally {
  //code the runs after no matter what
}

```

This all comes together to make better code that codes that can now handle errors.

Check out the exmaple below and try running it yourself:

```jsx
var input = "";

try {
  if(input == "") {
    throw "Input can not be empty";
  } else if(input.length > 5) {
    throw "Input is to big";
  } else {
    console.log("You code runs fine!");
  }
} catch(err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}

```

# Up Next

[Catch Me If You Can](https://www.notion.so/Catch-Me-If-You-Can-d00c7007382a4e0f94c251c49914f1d4?pvs=21)