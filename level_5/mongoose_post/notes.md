

# Overview

Learn how to create and perform a Post request to your database using the Mongoose package.

# Lesson Video

https://www.youtube.com/watch?v=UOLyFknzlDQ

---

## Section 2: POST (Create) Operations

### Introduction

Creating new documents in the database is a common task in web applications. In this section, we'll explore how to insert data into MongoDB collections using Mongoose.

### Create (Insert Data)

Learn how to create new documents in the database using Mongoose. The process involves creating an instance and then calling the `save` method.

**Code Example:**

```jsx
const Todo = require("../models/todo");

// Create a new "todo" instance from the request's JSON body
const newTodoObj = new Todo(req.body);
newTodoObj.save((err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newTodoObj);
});

```

### Conclusion

You've now gained an understanding of how to perform create (POST) operations in Mongoose. Practicing these operations will enable you to seamlessly add data to your MongoDB collections. Get ready to build new records in your application.

---

- [Mongoose API Docs](http://mongoosejs.com/docs/api.html)
- [Mongoose Schema Guide](http://mongoosejs.com/docs/guide.html)
- [Mongoose Models Guide](http://mongoosejs.com/docs/models.html)
- [Mongoose Documents Guide](http://mongoosejs.com/docs/documents.html)
- [Mongoose Queries Guide](http://mongoosejs.com/docs/queries.html)

# Next Step

[Install MongoDB Compass](https://www.notion.so/Install-MongoDB-Compass-0bcbf8994b5a405a8b940fad2024eef8?pvs=21)