

# Overview

Learn about Schemas and Models in Mongoose. This will teach you how to structure the different data sets in your database.

# Lesson Video

https://www.youtube.com/watch?v=WcwFUlF1Hew

!https://coursework.vschool.io/content/images/size/w2000/2015/12/Blueprint_banner.jpg

### **Understanding Schemas**

A "Schema" can be a tough thing to understand at first, but in reality it's pretty straightforward. A Schema for a database is akin to a "Class" in Object-Oriented Programming. Where a class is like a blueprint for creating objects in a program, a **Schema** is a blueprint for creating objects (MongoDB calls them "documents") in a database. We tell the database how the documents we're going to insert will be structured (it's going to have a `name` property which will be a "String" type, an `admin` property which will be of "Boolean" type, etc.), and the database can then do some validation for us. (Database: "Hey, you said any `Person` object is going to have a required `name` field, but this Person object you just tried to save doesn't. I'm rejecting it, and won't be adding it to the database. [Kthxbye](http://www.urbandictionary.com/define.php?term=kthxbye).").

Typically, NoSQL databases are *super* flexible, in that they allow us to put whatever we want in them without enforcing any specific kind of structure. (Relational databases tend to be the opposite, enforcing that all items in the database look similar. So if you want to change the way your data looks, good luck because you'll need to change all items that are already in there).

However, Mongoose adds a layer of structure on top of the typical "Wild West" MongoDB way of doing things. This helps us perform additional validation to ensure that our users aren't submitting junk data into our database without us having to write tons of [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) ourselves.

[Mongoose Schemas](http://mongoosejs.com/docs/schematypes.html) can be very powerful, but before we jump into the nitty gritty, let's make sure we cover the basics. We'll be using the following Mongoose Schema for reference:

```jsx
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: String,
    // You can add specifics to each one too that help with validation, like making something required, or unique
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailAddress: [String],
    // Add 'enum' of an array of options to force selection between a given number of options.
    // Anything other than "male" or "female" will be invalid.
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    admin: Boolean,
    location: String
});

// Turn the schema you created into a "Model".
// mongoose.model("ModelNameSingular", modelSchema);
// "ModelNameSingular" will automatically be pluralized for you, and that pluralized version of the model name will also become the name of the MongoDB collection.

module.exports = mongoose.model("User", userSchema);

```

### **Simple schema data types**

Above you saw examples of simple datatypes such as `name: String`, `admin: Boolean`, etc. You also saw the ability to add more specific instructions on how the validation should be handled. For example, if a user submits their information without a `name` property, it will still pass validation because we didn't specify that names are required. However, if they try to submit their info without a `username`, OR if they try to submit a `username` that's already being used (I.e. *not unique*), it will fail validation and come back with an error. This is an excellent and dead-simple way to ensure that our data is sanitized before it gets saved to the database, and it's all thanks to Mongoose!

### **Collections of data**

You can also see examples of collections or more complex datatypes in the `userSchema` above. `emailAddress` for example, is going to be an array of strings. This way, a user is allowed to register multiple email addresses under their account information.

But what if the second level of data needs to be more complex? Let's look at an example below to better understand one of the major design decisions you'll need to make as a database admin in MongoDB.

---

### **Using Mongoose Schemas**

It's important for our code to be organized well. When you create a schema, you'll want to always put them in their own files, one schema per file. Your project structure may look something like this:

```jsx
server.js
package.json
.gitignore
    |__ models/
        |__ user.js
        |__ kitten.js
        |__ puppy.js
        |__ anyOtherSchemas.js
    |__ routes/
        |__ authRoutes.js
        |__ puppyRoutes.js
        |__ kittenRoutes.js
        |__ anyOtherRoutes.js

```

Think of each of those models files as a tool that we can pull in later to use for interacting with that particular collection in the database. The file itself won't perform any operations on the DB; we won't be creating, getting, updating, or removing any `User`s *inside* the `user.js` file. Instead, we're creating a tool that we can export (see the last line of our example `User` schema above where we run `module.exports = mongoose.model("User", userSchema)`), and then whenever we need to interact with the database (usually within our routes) we can just require that model and use all the methods attached to the model.

---

### **Collection Structure**

Oftentimes the data you're designing will need more than just a simple datatype to contain all the information. Sometimes the nested data will need to have a whole structure of its own. This is where you will need to ask yourself a crucial question: should I use embedded documents or reference a separate document with an ObjectId? Let's look at examples of both:

### **Embedded documents**

Embedding documents looks very similar to what you've probably seen already with most complex JSON: arrays inside of objects, objects inside of arrays, objects inside of other objects, etc. Let's look at an example of a good time to use the embedded document style:

```jsx
const userSchema = new Schema({
    name: String,
    address: String
});

```

As it is now, a user will need to submit their address as a single string: `123 West Example St. Pawnee, IN, 12345`. This isn't very helpful though, because what if we someday want to query the database for all citizens in the city of Pawnee? It would be very difficult and burdensome to do so if we leave our `address` property as a single string. Instead, we need to split it into its own object:

```jsx
const userSchema = new Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number
    }
});

```

This allows us to do some additional validation and manipulation of the incoming data by adding options to each of these embedded properties:

```jsx
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const userSchema = new Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            uppercase: true,
            required: true,
            enum: statesArray
        },
        zip: Number
    }
});

```

This is considered a good use-case for embedding information directly into the parent document - you might frequently need the address of a user, and in this case you can get all that information in one `Read` of the database (one call to the database for information). It's also a good use-case for this type of structure because any specific user's address isn't likely to be repeated all that much throughout the database. Even if there are 10 users all living at the same address, that same information is only being repeated 10 times throughout the whole database.

### **References**

On the other hand, there are times when instead of embedding the data directly into the parent resource, it makes sense to save that data as its own separate document in its own separate collection, and then reference the `_id` of the child document inside the parent document. Let's look at a good example of when this might be the best way to structure your data, straight from the [MongoDB docs](https://docs.mongodb.org/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/):

```jsx
// Object 1
{
    title: "MongoDB: The Definitive Guide",
    author: [ "Kristina Chodorow", "Mike Dirolf" ],
    published_date: ISODate("2010-09-24"),
    pages: 216,
    language: "English",
    publisher: {
        name: "O'Reilly Media",
        founded: 1980,
        location: "CA"
    }
}

// Object 2
{
    title: "50 Tips and Tricks for MongoDB Developer",
    author: "Kristina Chodorow",
    published_date: ISODate("2011-05-06"),
    pages: 68,
    language: "English",

    publisher: {
        name: "O'Reilly Media",
        founded: 1980,
        location: "CA"
    }
}

```

In this instance, the `publisher` data is repeated. This will begin to make our database slow and bulky when we begin to enter thousands or tens of thousands of repeated information about the same publisher in the parent data of all the books that publisher has published.

A better way to structure data like this is to make a separate Schema of the nested data and use what are called `ObjectId`s to reference the ID of the object in its own collection:

**publisher.js:**

```jsx
const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    founded: Number,
    location: String
});

module.exports = mongoose.model("Publisher", publisherSchema);

```

**book.js:**

```jsx
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    publishedDate: Date,
    language: String,

    // "type" should be Schema.Types.ObjectId and "ref" should point
    // to the "ModelName" you choose when using mongoose.model("ModelName", modelSchema)
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "Publisher"
    }
});

module.exports = mongoose.model("Book", bookSchema);

```

Now when you add a new book, you need to make sure that it has a valid reference to an existing publisher's `_id` attribute. If that publisher doesn't exist, you'll either need to submit a book without a publisher and add that in later, or make sure to create the publisher before you save the book to the database so you have a working reference to the publisher.

Depending on how you decide is best to perform these operations, you may benefit from a third-party plugin/package called [mongoose-findorcreate](https://github.com/drudge/mongoose-findorcreate).

---

### **Conclusion**

Database modeling is *not* a simple task. This is the kind of thing that database architects get paid 6 figures to figure out. So don't feel bad if it takes *a lot* of practice before some of this starts to make sense.

The first thing you could do when deciding which structure for your data you should use is to ask yourself: is the relationship I'm thinking about embedding repetitive? If the answer is "no", consider using embedded types. If the answer is "yes", consider using references to ObjectIds.

When you're feeling comfortable and ready to move on, check out the post on using [Mongoose Schemas to perform CRUD operations](http://coursework.vschool.io/mongoose-crud/)

# Next up

[Get Request w/ Mongoose](https://www.notion.so/Get-Request-w-Mongoose-cf771740958b49799814f4848c4d94ea?pvs=21)