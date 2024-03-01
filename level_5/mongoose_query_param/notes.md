
# Overview

Just like in Express, you can use Params and Queries within Mongoose

# Lesson Video

https://www.youtube.com/watch?v=90PEq5GdqIo

# Using Params and Queries with Mongoose in an Express App

When building a web application, it's common to need to retrieve and manipulate data from a database based on user inputs or requests. In an Express.js application, you can accomplish this using Mongoose, a popular library for interacting with MongoDB. This guide will walk you through using parameters (params) and queries to fetch and manipulate data in your Express app using Mongoose.

## Using Params

### What Are Params?

Params (short for parameters) allow you to capture dynamic values in the URL of your routes. For instance, in a route like `/items/:itemId`, `:itemId` is a param that can represent any value. You can access this value within your route handler and use it to retrieve data from your database.

### Example:

```jsx
const express = require('express');
const app = express();
const Item = require('../models/item');

// Define a route with a param
app.get('/items/:itemId', (req, res) => {
    const itemId = req.params.itemId; // Access the itemId param
    Item.findById(itemId, (err, item) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.json(item);
    });
});

```

In this updated example, we're using the `:itemId` param to retrieve an item by its unique ID. This change makes the example more generic and applicable to various scenarios.

## Using Queries

### What Are Queries?

Queries in Express routes allow you to pass additional information to your server via the URL or request body. These are especially useful for specifying search criteria when fetching data from your database.

### Example:

```jsx
const express = require('express');
const app = express();
const Product = require('../models/product');

// Define a route with a query
app.get('/products', (req, res) => {
    const category = req.query.category; // Access the category query
    Product.find({ category }, (err, products) => {
        if (err) {
            return res.status(500).send err);
        }
        return res.json(products);
    });
});

```

In this example, we're using the `category` query to filter products by category.

## Combining Params and Queries

You can also combine params and queries to create complex and dynamic routes. For example, you can fetch a specific resource using a combination of the resource's ID (param) and additional criteria (query).

### Example:

```jsx
const express = require('express');
const app = express();
const Resource = require('../models/resource');

// Define a route with both param and query
app.get('/resources/:resourceId', (req, res) => {
    const resourceId = req.params.resourceId; // Access the resourceId param
    const criteria = req.query.criteria; // Access the criteria query
    Resource.find({ _id: resourceId, ...criteria }, (err, resource) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.json(resource);
    });
});

```

In this example, we're using both the `resourceId` param and the `criteria` query to fetch a specific resource based on additional criteria.

## Conclusion

Params and queries are essential tools for creating dynamic and data-driven Express applications with Mongoose. They allow you to customize the behavior of your routes and retrieve specific data from your MongoDB collections based on user inputs or dynamic values. As you continue to develop your Express app, mastering params and queries will become a valuable skill for building powerful and flexible APIs.

By using these concepts effectively, you can create highly customizable and interactive routes that cater to your application's specific needs. Happy coding!

# Next up

[Crud Store](https://www.notion.so/Crud-Store-1a085902baf34de08ecaa99b58cd6ed2?pvs=21)