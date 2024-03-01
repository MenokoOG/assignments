

# Overview

Learn how to create and perform a Delete request to your database using the Mongoose package.

# Lesson Video

https://www.youtube.com/watch?v=Ba2YnVfGATI

---

---

## Section 3: DELETE (Remove) Operations

### Introduction

Deleting data is a crucial part of maintaining a clean and organized database. In this section, we'll explore how to remove documents from MongoDB collections using Mongoose.

### Delete (Remove Data)

Learn how to delete documents from your database using Mongoose. You can either find the document first and then call the `remove` method or use helper methods like `findOneAndRemove` and `findByIdAndRemove`.

**Code Example:**

```jsx
Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "Todo successfully deleted",
        id: todo._id
    };
    return res.status(200).send(response);
});

```

### Conclusion

This section has equipped you with the knowledge of performing delete (DELETE) operations in Mongoose. Whether you prefer to find and remove documents or use helper methods, you now have the skills to manage your MongoDB collections efficiently. Practice these techniques to keep your data clean and organized.

---

- [Mongoose API Docs](http://mongoosejs.com/docs/api.html)
- [Mongoose Schema Guide](http://mongoosejs.com/docs/guide.html)
- [Mongoose Models Guide](http://mongoosejs.com/docs/models.html)
- [Mongoose Documents Guide](http://mongoosejs.com/docs/documents.html)
- [Mongoose Queries Guide](http://mongoosejs.com/docs/queries.html)

# Next Up

[Put Request w/ Mongoose](https://www.notion.so/Put-Request-w-Mongoose-3a282124a09342998a593b7f30ded71c?pvs=21)