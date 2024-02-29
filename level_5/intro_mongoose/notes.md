

# Overview

### Learn what Mongoose is.

Mongoose is an object data modeling (ODM) library for MongoDB and Node.js. It provides a way to define data schemas, interact with the database, and perform validation on the data being inserted or retrieved.

In web development, Mongoose is commonly used as an interface between the server-side Node.js application and the MongoDB database. It provides a convenient way to define and interact with MongoDB collections and documents, which allows developers to write cleaner, more maintainable code.

With Mongoose, you can define your data schema using a simple, JavaScript-based syntax, which makes it easier to maintain and update your application's data models over time. You can also perform CRUD (create, read, update, delete) operations on your MongoDB data using Mongoose's built-in methods, which can help simplify your code and reduce the amount of boilerplate you need to write.

### How To Use Mongoose:

To use Mongoose v6, first, you need to install it using a package manager such as npm. You can use it to perform CRUD operations on your MongoDB database using Mongoose's built-in methods such as create, find, update, and delete. Overall, Mongoose v6 is a powerful and easy-to-use tool for interacting with MongoDB databases in Node.js web applications.

<aside>
💡 The video below uses v5 of Mongoose. If you’re using v6 or v7 (check your package.json) use the the S**upplementary Content** below for specific updates. 
NOTE: Use the following command to get the latest version of v6: **`npm i mongoose@6.12`**
NOTE**:** Using `**npm i mongoose**` will install the latest version, which is v7. 
NOTE: VSCHOOL RECOMMENDS USING npm create vite@6.12 to use version 6.12 of Mongoose.

</aside>

https://youtu.be/JBoY8MDEzP0

[GitHub - v-school/m5-dbsandmongoose](https://github.com/v-school/m5-dbsandmongoose)

# Supplementary Content

PREVIOUS UPDATE From v5 to v6

Instead of writing: 

```jsx
mongoose.connect("mongodb://localhost:27017/test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log('connected to database'))
```

You can leave the 2nd argument out:

```jsx
mongoose.connect("mongodb://localhost:27017/test-db", () => console.log('connected to database'))
```

Although documents in a MongoDB collection do not have to be homogeneous (they may have different schemas), Mongoose enforces document schemas to make the collection more uniform (and they help a lot). Here is how you connect to MongoDB with Mongoose v6:

```jsx
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-name',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

```

*You may replace `db-name` with whatever your database is called. `localhost` implies that MongoDB is running on your local machine, but it is possible to use a remote database service such as [MongoLab](https://mongolab.com/).*

Once you have a connection to MongoDB, it's time to make some schemas. Each schema is associated with a MongoDB collection. Here is how we would write our friend schema from yesterday:

```jsx
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name: String,
  age: Number,
  interests: [String],
  friends: [String]
});

```

Right now this schema is nothing more than a template of how each document in the `friends` collection will look. To be able to add new friends, and update and delete them (etc.), we must register the schema with mongoose and make a model:

```
const Friend = mongoose.model('Friend', friendSchema);

```

Now that we have a data model to work with, we can perform all the CRUD operations from within Node.

Here's what a create would look like:

```jsx
const myFriend = new Friend({
  name: 'JD',
  age: 24,
  interests: ['Music', 'Food'],
  friends: []
});

myFriend.save((err, new_friend) => {
 console.log(new_friend);
});

```

Here's a read:

```jsx
Friend.find({age: 24}, (err, friends) => {
  console.log(friends);
});

```

This will return a maximum of one document:

```jsx
Friend.findOne({age: 24},(err, friend) => {
  console.log(friend);
});

```

Here's how you update a document:

```jsx
Friend.findOne({name: 'JD'}, (err, friend) => {
  friend.age++;
  friend.save((err, new_friend) => {
    console.log(new_friend);
  });
});

```

And finally, to remove a document:

```jsx
Friend.findOne({name: 'JD'}, (err, friend) => {
  friend.remove(err => {
    console.log('JD is gone');
  });
});

```

Some important notes:

- `err` is only set if there is an error with the database, not if nothing is found
- For the `findOne` function, if nothing is found the data parameter is `null`
- If you need to access a particular model (called `Friend` for example), just use `mongoose.model('Friend')`

# Mongoose v7

Mongoose has now updated to Version 7!

Mongoose version 7 is a Node.js object data modeling (ODM) library that provides a schema-based solution for modeling application data, making it easier to work with MongoDB databases. Some of the key features of Mongoose 7 include support for transactions, improvements to connection handling, new middleware and hooks, and a number of bug fixes and performance improvements. Mongoose 7 also includes support for the latest versions of Node.js and MongoDB, as well as deprecations and removals of some older features.

Mongoose version 7 introduced several changes compared to version 6, including the removal of the callback function.

The reason for removing the callback function is to simplify the API and reduce the maintenance burden of supporting both promises and callbacks.

If you're used to working with Mongoose 6 and prefer its behavior, it is recommended to use **`npm i mongoose@6.10.3`** to install the previous version. However, if you wish to use Mongoose 7, you can find the documentation for it at **https://www.npmjs.com/package/mongoose/v/7.0.2**.

NOTE: Mongoose v7 is still relatively new, so support and stability will be limited compared to Mongoose v6.