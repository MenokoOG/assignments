# Middleware

## What is it?
* app.use()
    1. (optional)- mount path(endpoint)
    2. callback function - receives the request, response objects, also the 'next' function

## The "next" function
* tells express to look for next piece of middlware to run tha is in line 
