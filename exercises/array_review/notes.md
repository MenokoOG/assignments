Arrays are a data structure we can use to collect together multiple other pieces of data. Essentially, it's like a box that holds things inside in a specified order.

# **Creating an array**

Arrays are created simply by surrounding the pieces of data you want in the array with square brackets (`[` and `]`).

```jsx
var myArray = [1, 2, 3];
var mixedArray = [
    true,
    42,
    "Hello world",
    ["cat", "in", "the", "hat"],
    { title: "Catcher in the Rye", author: "J. D. Salinger" },
    function add(a,b) {return a + b}
];

```

As you can see in `mixedArray`, JavaScript arrays can contain any other data type in them, even if they're mixed together. In some languages you have to specify what type of data an array will contain, forcing you to create arrays with only one data type. (All strings, all booleans, etc. but no mixtures).

That being said, if you find yourself writing an array that contains multiple different data types in it, you're most likely going to be better off using an object instead of an array.

---

# **Accessing elements from an array**

Each item in an array is automatically assigned a position (called an "index") in the array. If it's the very first item in the array, it has an index of 0. (All arrays start with an index of 0. It's confusing at first, but you'll get used to it quickly).

To access elements in an array, you need to know which index the item you're looking for is at. To access the individual element in the array, you use square bracket notation: `myArray[<index of the item you want>]`. For example:

```jsx
var turtles = ["Leo", "Don", "Raph", "Mike"];

// to access "Leo":
turtles[0];  // "Leo" is at index 0

// to access "Mike":
turtles[3];  // "Mike" is at index 3

```

---

# **Array Properties**

The only property you need to know for now is the `.length` property, which returns the number of items in the array.

```jsx
var myArray = ["I", "Like", "Turtles"];
console.log(myArray.length) . // 3
let last = myArray[array.length -1] 
console.log(last)
```

> Critical Thinking: How might you access the last element from an array using the array's .length property?
>You could use a negative index, so let last = myArray[array.length -1] 