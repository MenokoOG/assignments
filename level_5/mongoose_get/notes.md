

# Overview

Learn how to create and perform a Get request to your database using the Mongoose package.

# Lesson Video

https://www.youtube.com/watch?v=tVFbJMlsc9U

# Article

!https://coursework.vschool.io/content/images/size/w2000/2017/06/CRUD.jpg

We've covered the basics of making queries in the [MongoDB Shell](https://coursework.vschool.io/mongodb-overview/), but since we'll mostly be writing our queries in our server's JavaScript code using Mongoose, it makes sense to understand how Mongoose does queries. We'll be covering basic CRUD (Create, Read, Update, Delete) operations.

With Mongoose, you can perform these operations wherever you want to in your code. Usually when we talk about CRUD, we're talking about it in tandem with the 4 most common HTTP methods, `GET`, `POST`, `PUT`, and `DELETE`, which map to the CRUD operations like so:

## Section 1: GET (Read) Operations

### Introduction

In this section, we'll explore how to retrieve data from MongoDB using Mongoose. Whether you want to fetch all documents or find specific ones that match certain criteria, Mongoose provides convenient methods for reading data.

### Read (Retrieve Data)

### `find([query], [callback])`

The `find` method allows you to retrieve all documents that match the provided query. If no query is given, it returns all items in the collection.

**Code Example:**

```jsx
const Person = require("../models/person");

// Find all people
Person.find((err, people) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(people);
});

// Find people with a specific query
Person.find({ name: "John James", age: 36 }, (err, people) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(people);
});

```

### `findOne([query], [fieldsToReturn], [callback])`

Use `findOne` to retrieve a single document that matches the query. Even if multiple documents match, it returns the first one it finds.

**Code Example:**

```jsx
Kitten.findOne(
    // Query
    { color: "white", name: "Dr. Miffles", age: 1 },

    // Fields to return
    { name: true, owner: true },

    (err, kitten) => {
        if (err) return res.status(200).send(err);
        return res.status(200).send(kitten);
    }
);

```

### `findById(id, [fieldsToReturn], [callback])`

To retrieve a single document by its unique ID, you can use the `findById` method.

**Code Example:**

```jsx
Kitten.findById(req.params.kittenId, (err, kitten) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(kitten);
});

```

### Conclusion

This section has introduced you to the read (GET) operations in Mongoose. You now have the knowledge to fetch data from your MongoDB collections efficiently. Practice these operations to become proficient in data retrieval using Mongoose.

---

---

- [Mongoose API Docs](http://mongoosejs.com/docs/api.html)
- [Mongoose Schema Guide](http://mongoosejs.com/docs/guide.html)
- [Mongoose Models Guide](http://mongoosejs.com/docs/models.html)
- [Mongoose Documents Guide](http://mongoosejs.com/docs/documents.html)
- [Mongoose Queries Guide](http://mongoosejs.com/docs/queries.html)

# Next Up

[Post Request w/ Mongoose](https://www.notion.so/Post-Request-w-Mongoose-58e7ded0b06e434b97923011754211c6?pvs=21)