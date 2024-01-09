Nested loops are a very useful tool that we have access to in JavaScript. They can be used for a variety of things, such as accessing/creating matrices, or building a game similar to Battleship using a grid like system.

### **Multidimensional Arrays**

We refer to arrays inside of arrays as "Multidimensional Arrays." People might also call them "Nested arrays." Specifically, two layers deep is a "Two Dimensional Array," three layers deep is a "Three Dimensional Array."

### **Uses**

First, let's take a look at our array

```jsx
var arr = [[1,2], [3,4], [5,6]];

```

It's easier if we look at it like this

```jsx
// the variable arr is an array full of arrays
var arr = j[
    [1,2], // <-- this is an array
    [3,4], // <-- this is an array
    [5,6]  // <-- this is an array
];

```

Now let's look at the first for loop

```jsx
for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

```

We are console logging `arr[i]`, `i` starts at a value of 0 and increments 1 each round through the loop.

Therefore our console will look like this

```jsx
[1,2] // arr[0] or the first time through the loop
[3,4] // arr[1] or 2nd loop
[5,6] // arr[2] or 3rd loop

```

Let's do the nested loop now

```jsx
 for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

```

The console.log here will print out like this

```jsx
//I listed below next to each number what arr[i][j] will actually look like each round through the for loops.

1 // arr[0][0]
2 // arr[0][1]
3 // arr[1][0]
4 // arr[1][1]
5 // arr[2][0]
6 // arr[2][1]

```

### **Warning**

Nested loops are often considered dangerous. They are fine on a small scale, but let's pretend we have an app with users and each of the users can favorite other user's profiles.

We wouldn't want to write a nested loop that looped through all our users, and each time it did that, looped through the users again to see if that user had favorited any other user.

This operation would perform fairly quick if we just had 10 users.

It would loop through each user, and on each user it would loop 10 times to check that user against each of the others. Meaning the loop would run 100 times

But if we had 1,000 users, that would be 1,000,000 checks. This operation would become exponentially slower the more users we get. This is part of the Big O discussion, but that's all we'll mention here.