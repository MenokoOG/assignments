// catch me if you can exercise, menoko og, 1-17-24
// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
function sum(x, y) {
    // Check data types first and throw error
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Both arguments must be numbers')
    }

    return x + y
}

try {
    // Call the sum function inside a try block using "1" and "2" as arguments
    const result = sum("1", "2")
    console.log(result); // This line won't be executed if an error occurs
} catch (error) {
    // Use console.log within a catch block to inform the user of the error
    console.error(error.message)
}

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
let user = { username: "sam", password: "123abc" };

function login(username, password) {
    // Check credentials
    if (username === user.username && password === user.password) {
        console.log("Login successful!");
    } else {
        throw new Error("Incorrect username or password");
    }
}

try {
    // Call the login function within a try block with correct credentials
    login("sam", "123abc");
} catch (error) {
    // Catch block won't be executed in this case
    console.error(error.message);
}

try {
    // Call the login function within a try block with incorrect credentials
    login("wrongUser", "wrongPassword");
} catch (error) {
    // Catch block will be executed and log the error message
    console.error(error.message);
}

