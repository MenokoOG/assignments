# Promises Workshop Examples

Welcome to the Promises Workshop! In this workshop, we'll explore the concept of promises in JavaScript and understand how they help us manage asynchronous operations more efficiently.

## Example 1: Simulating an HTTP GET Request

In this example, we have a function `fetchDataFromServer()` that simulates an HTTP GET request using a promise. We delay the resolution or rejection of the promise using `setTimeout`. If the random value generated is less than 0.5, the promise resolves with the message "Data successfully fetched!" otherwise it rejects with "Failed to fetch data!"

Usage:
```javascript
fetchDataFromServer()
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```
Debugging Tip: Put a breakpoint on the `return promise` line to inspect the promise object in the debugger.

## Example 2: Handling Promises

This example demonstrates how to handle promises using async/await syntax. We make an HTTP GET request to the PokeAPI to fetch data about a Pokémon and log the response.

**Note:** The original implementation uses `await` to handle the promise returned by `axios.get()`. However, in the updated version, the `await` keyword has been removed. This change results in the function not waiting for the promise to resolve before moving to the next line of code. As a consequence, the function may proceed before the response is received from the server, leading to unexpected behavior or errors.

Debugging Tip: Observe the difference in behavior when the `await` keyword is present versus when it is removed. This illustrates the importance of handling promises in an asynchronous manner to ensure proper execution flow.

This update clarifies the impact of removing the `await` keyword and highlights the potential consequences of not handling promises correctly in an asynchronous context.

## Example 2.5: Callstack

Here, we have a function `loop()` that performs nested loops to calculate the sum of multiplication of elements in an array. We use this example to understand the concept of the call stack.

Note: Example 2 will still be active to send the request, allowing us to see that the nested for loop completes first to populate the call stack.

## Example 3: Callback Hell

In this example, we demonstrate callback hell, a situation where asynchronous operations are nested within callback functions. We make multiple HTTP GET requests to the PokeAPI to fetch data about different Pokémon. This leads to deeply nested callbacks, making the code difficult to read and maintain.

Note: Example 3 will not return anything since Axios returns promises by default and is just there to show an example that is comparable to Example 4.

## Example 4: Promises

We refactor the callback hell example using promises and async/await syntax. This results in cleaner and more readable code, making it easier to manage asynchronous operations.

Feel free to explore and experiment with these examples to gain a better understanding of promises and asynchronous programming in JavaScript.# javascript-promises-workshop
