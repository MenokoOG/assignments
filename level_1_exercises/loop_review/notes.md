# **What is a loop?**

Any time you find yourself needing to repeat the same code over and over, you'll oftentimes need a loop.

Imagine you're tasked with `console.log`ging the numbers 1 through 1,000 to the console. Obviously this would be *very* obnoxious and repetitive to write manually. But still possible.

In a more complex example, imagine you're given an array of email addresses, and you need to write a program that will send out an email to each address. You might not know ahead of time which email addresses will be in the array, which actually makes it impossible to write the program dynamically to accept any array of email addresses.

**tl;dr:** loops are *real* important to understand, and you'll be using them *all the time*!

### **Types of Loops**

- **`for`** - performs a task for a specified number of iterations.
- **`while`** - performs a task for an unknown number of iterations, but while a condition is true.

Let's talk about each of these in detail

---

# **`for` loop**

One of the easiest ways to think about a for loop is to think of it as a glorified way of counting. You pick a number to start at (very commonly `0`) and tell it how high you want to count. Inside the for loop, you have access to the current count you're at.

Counting to 1,000? Instead of:

```jsx
console.log(0)
console.log(1)
console.log(2)
console.killmenow...

```

Use a `for` loop!

```jsx
for (var i = 0; i <= 1000; i++){
    console.log(i);
}

```

Notice that all we're doing is logging the variable `i`? Essentially the for loop is just keeping a count for us with the variable `i`. In order to understand how that works, we need to understand each part of the code in the parentheses of the loop.

### **Anatomy of a `for` loop:**

Inside the parentheses of the for loop you have 3 parts. In the example above, theres:

1. `var i = 0;`,
2. `i <= 1000`, and
3. `i++`

### **Section 1 - Initializing variables**

The first section is where you initialize any variables you'll need during the for loop. Typically you'll just create a variable called `i` (as a convention; there's nothing special about that variable name) and set it equal to `0`.

### **Section 2 - "Should I run again?" conditional**

The second section is a conditional statement that determines if the loop should run one more time. In the example above, it asks itself "is `i` still less than or equal to `1000`? Yes? Okay, I'll run the code again one more time!" As soon as the conditional evaluates to `false`, the loop will stop running.

### **Section 3 - Code to run right before checking the conditional in section 2**

The last section is a set of code to run right before checking to see if the loop should run again. You can think of it as a bit of code that should always be included at the very end of the `for` loop's code. `i++` increments `i` by 1, thereby bringing it closer to the conditional in section 2 evaluating to `false`.

> Note: You'll always want to make sure your conditional is getting closer to evaluating to false. What would happen if your for loop's signature (the first line of the for loop) looked like this: for (var i = 0; i > -1; i++)? If i is always great than -1 and we're making it get further and further away from -1, the loop will never end! This is called an "infinite loop".
> 

!https://media.giphy.com/media/MJ6SslGZEYKhG/giphy-downsized.gif

### **`for` loops with arrays**

Remember learning how each item in an array has an index number that tells you where in the array that item is? The very first item in the array is at index 0, the second item at index 1, and so forth.

Remember how you can access an item in an array by its index with square brackets after the array's variable name? Like so:

```jsx
var favoriteThings = ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles", "Warm woollen mittens"]

console.log(favoriteThings[0])  // logs "Raindrops on roses"

```

What if you wanted to do something to every item in the array, say `console.log` it? Just like the counting to 1,000 example above, you could do:

```jsx
console.log(favoriteThings[0]);
console.log(favoriteThings[1]);
console.log(favoriteThings[2]);
console.log(favoriteThings[3]);

```

But then if you include ALL of your favorite things (14 things according to the song), you'd need 14 lines of code! And notice the only thing that has changed between lines is the index number? And notice we're just starting from the beginning and moving to the end of the array? If you manually wrote each of those lines and then added things to your array, you'd *also* need to add lines to your console logs... it all stinks of poor design. Let's use a `for` loop to do something to every item in the array!

```jsx
for (var i = 0; i < 4; i++) {
    console.log(favoriteThings[i]);
}

```

The variable `i` starts at 0 and goes up to 3 before the loop stops. Each time through the loop, it runs `console.log(favoriteThings[i])`, the computer evaluates `i` and uses it as the index of the item in the array.

There's a problem though. If we add items into the array, our loop is still set up to only get the first 4 items because hard-coded the `i < 4` part into the for loop.

Instead, let's use the array's `.length` property to determine how many times the loop should run:

```jsx
for (var i = 0; i < favoriteThings.length; i++) {
    console.log(favoriteThings[i]);
}

```

Now if we ever added an item to `favoriteThings`, the loop would run the correct number of times!

# **While loop**

A `while` loop does something very similar to a `for` loop, in that it's job is to run lines of code over and over. The main difference, however, is that instead of running the code a pre-determined number of times (e.g. once for every item in an array), it runs an indeterminite number of times until the condition evaluates to `false`.

For example, imagine you prompt a user to indicate whether they like raisins or not. You need them to either type "yes" or "no", and no other input will work. You could write a loop to ensure the user can't move forward in your program unless they type "yes" or "no" with a `while` loop:

```jsx
var likesRaisins = prompt("Do you like raisins? Type 'yes' or 'no':");

while(likesRaisins !== "yes" || likesRaisins !== "no"){
    likesRaisins = prompt("Please only type 'yes' or 'no'. Do you like raisins?");
}

console.log("You said '" + likesRaisins + "' to my question.")

```

This way you can rest assured that you will have a valid answer in the code after your while loop. If the user inputs an invalid answer, the loop will get them stuck forever. *We don't know how long they'll be stuck answering incorrectly ahead of time*, so a `while` loop is perfect here!

*Or maybe you need to seek out better users for your program. It was a simple question...*

---

# **Tools to use in loops**

### **`break`**

`break` is a reserved keyword that ends the loop early. Say you're checking an array to see if it contains even a single `true` as one of its items (and pretend you haven't learned about `indexOf` yet). You decide to loop through it checking for `true`:

```jsx
for(var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
        console.log("We found a true!");
        break;
    }
}

```

*As soon as you find a `true`*, you can break out of the loop. No need to continue through the loop since you found what you were looking for.

### **`continue`**

`continue` is also a reserved keyword that will skip the rest of the current iteration and go to the next iteration, but doesn't stop the loop like `break` does.

Imagine you want to count to 10. But when you were in the 7th grade you came to school on Halloween in a Ghostbuster's costume only to discover, to your horror, **no one else had dressed up!**

Ever since, you've hated the number 7. As such, when counting to 10, you want to just skip 7 altogether.

```jsx
for (var i = 0; i <= 10; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
}

```

If `i` is 7, the program says "uhh, don't run any of this code this time, just *continue* to the next time through the loop."

# **Conclusion**

Loops are an extremely useful tool that you'll find yourself using *all the time* in programming. They're usually one of the first difficult concepts programmers face, but the more you play with them, the better you'll understand them. Don't give up!