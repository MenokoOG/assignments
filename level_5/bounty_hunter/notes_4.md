
# Overview

Boba Fett has asked you to build him an API so he can keep track of his bounties. You have done a satisfactory job up to this point except that every time the server reloads, all the data is wiped. Boba Fett is absolutely not happy about this because it means he has to go back to Jabba the Hutt to get a list of bounties. To help him out (and more importantly, to make sure you don't get on the list) you have decided to use MongoDB to persistently store the bounty hunter data. And you have decided to use Mongoose to do so.

# Objectives

Since you already have the routes set up and working (from the previous [bounty hunter exercise](https://coursework.vschool.io/the-original-bounty-hunter/)), the first step is to create a data model. You can refer to [this document](https://coursework.vschool.io/mongoose-basics/) if you need a refresher on how to use mongoose.

Once the data model is created (preferably in a file separate from your routes) it's time to add mongoose queries to your routes. For example, when handling GET requests, use the find query to get a list of all the bounties:

- Create a Model
- Add Mongoose Queries to each request type in order to get the necessary information. (See Code example below)

```jsx
app.get('/bounty', function (req, res) {
  // assuming your model is called bounty
  Bounty.find({}, function (err, data) {
    // the data parameter contains a list of bounties
    res.send(data);
  });
});
```

It's pretty simple. Ask for help if you need it. Enjoy, and don't get on Boba Fett's dark side :)

# Related Lessons

[Schemas/Models in Mongoose](https://www.notion.so/Schemas-Models-in-Mongoose-c9e73e48e59846e9b0fee421a985db30?pvs=21)

[Using Params and Queries w/ Mongoose](https://www.notion.so/Using-Params-and-Queries-w-Mongoose-30c391b4f4a8432f936d2887a236cc64?pvs=21)

[Get Request w/ Mongoose](https://www.notion.so/Get-Request-w-Mongoose-cf771740958b49799814f4848c4d94ea?pvs=21)

[Post Request w/ Mongoose](https://www.notion.so/Post-Request-w-Mongoose-58e7ded0b06e434b97923011754211c6?pvs=21)

[Put Request w/ Mongoose](https://www.notion.so/Put-Request-w-Mongoose-3a282124a09342998a593b7f30ded71c?pvs=21)

[Delete Request w/ Mongoose](https://www.notion.so/Delete-Request-w-Mongoose-7938a063e4574f329179fc9716aacb4b?pvs=21)

# Next Up

[Relating Data in MongoDB (one to many)](https://www.notion.so/Relating-Data-in-MongoDB-one-to-many-6bc910f5da6441cabfd11a393a272a80?pvs=21)