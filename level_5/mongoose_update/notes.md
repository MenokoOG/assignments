

# Overview

Learn how to create and perform a Put request to your database using the Mongoose package.

# Lesson Video

https://www.youtube.com/watch?v=kl7aBSD6o4o

---

## Section 4: PUT (Update) Operations

### Introduction

Updating documents in the database is a critical part of application development. In this section, we'll explore how to modify existing data using Mongoose.

### Update (Modify Data)

Discover the process of updating data using Mongoose. It typically involves a combination of reading and creating. Methods like `findByIdAndUpdate` make updating documents efficient.

**Code Example:**

```jsx
// Assuming this is inside a PUT request
Todo.findByIdAndUpdate(
    req.params.todoId, // ID of the item to update
    req.body, // Changes to be made
    { new: true }, // Option to return the updated document
    (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send(todo);
    }
);

```

### Conclusion

You've now learned how to perform update (PUT) operations in Mongoose. Whether you choose to use methods like `findByIdAndUpdate` or take a different approach, you have the tools to modify data in your MongoDB collections. Practice these techniques to keep your data up-to-date.

---

- [Mongoose API Docs](http://mongoosejs.com/docs/api.html)
- [Mongoose Schema Guide](http://mongoosejs.com/docs/guide.html)
- [Mongoose Models Guide](http://mongoosejs.com/docs/models.html)
- [Mongoose Documents Guide](http://mongoosejs.com/docs/documents.html)
- [Mongoose Queries Guide](http://mongoosejs.com/docs/queries.html)

# Next Up

[Using Params and Queries w/ Mongoose](https://www.notion.so/Using-Params-and-Queries-w-Mongoose-30c391b4f4a8432f936d2887a236cc64?pvs=21)