

# Overview

You are a bounty hunter of the Old Republic. Your parents were killed by a Sith Lord as a child and your goal in life is to kill all the Sith and Jedi.

In order to help you in your quest, and since you are a do-it-yourself kind of bounty hunter, you have learned programming so you can keep track of your bounties and kills!

Using Express, create an API on the `/bounty` route that:

1. `GET`s a list of all bounties
2. `POST`s new bounties,
3. `DELETE`s a bounty
4. `PUT`s (updates) a bounty

Since we haven't started connecting to MongoDB quite yet, you can just save your bounties in a `bounties` array in your server code. Keep in mind that since it isn't being persisted anywhere, anytime you make a change to your server code and restart the server, you'll lose all your bounties.

A bounty object should have:

- First Name
- Last Name
- Living (Boolean)
- Bounty Amount (number)
- Type (‘Sith’ or ‘Jedi’)
- ID (a unique identifier. Use the `uuid` package to generate unique ids. - `npm install uuid` and check the [docs](https://www.npmjs.com/package/uuid) to see how to use it. It's as simple as requiring the package and running `uuid.v4()`)

Since there isn't a front end set up yet, you'll just use Postman to interact with the server and update the data.

# Objective for PART 3 - Client Setup

For this part you will have to [set up a full stack React application](https://coursework.vschool.io/setting-up-a-full-stack-react-application/). Since you do not have a database yet, ignore the `/models` folder contained in the example. You instead will have something like `bountyData.js` which contains your data.

You will now build a client-side React interface for the server you created!

Your app should be a CRUD application - it should be able to: 

- Create (POST) new bounties,
- Read (GET) existing bounties and show them to the user of your site,
- Update (PUT) existing bounties (e.g. if you wanted to up the price for a bounty), and
- Destroy (DELETE) bounties from the list of all bounties.

You will need to use everything you've learned about state management, HTTP, and forms!

The design is up to you, so have fun with it!

# Related Lessons

[Connecting the Frontend to the Backend](https://www.notion.so/Connecting-the-Frontend-to-the-Backend-d9095bc328004716a9a62cec954ad437?pvs=21)

[Get Request to your Server](https://www.notion.so/Get-Request-to-your-Server-aab3fcd37509430aaebadef7c86695d8?pvs=21)

[Post Request to your Server](https://www.notion.so/Post-Request-to-your-Server-c397177dde4f4c9f99d68a719d5471d0?pvs=21)

[Delete Request to your Server](https://www.notion.so/Delete-Request-to-your-Server-f4eb2d7ad0de40a6b15ef226dcc9f2a6?pvs=21)

[Put Request to your Server](https://www.notion.so/Put-Request-to-your-Server-47dbc5c631a54709b21b365643be6b6e?pvs=21)

# Next Up

[Error Handling in Express](https://www.notion.so/Error-Handling-in-Express-f9abd05582f44ccfb42b301700abffaa?pvs=21)