

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

# Objective for PART 2 - **Adding `PUT` & `DELETE`**

After learning about `req.params`, now add endpoints that allow you to:

- `DELETE` a bounty from the bounties array, and
- `PUT` (update) an existing bounty.

You'll need to pass the `uuid` you added when `POST`ing new bounties as a URL Parameter to the endpoint in order to have a reference to the object you want to update or delete.

# Related Lessons

[We Need ID's](https://www.notion.so/We-Need-ID-s-a9c82ba30d3e44aea42c045f7d4a9d69?pvs=21)

[Express Params](https://www.notion.so/Express-Params-9ffd77247cc94763b27a4f72b6101c2c?pvs=21)

[Delete Request in Express](https://www.notion.so/Delete-Request-in-Express-9ee10f6aadab4702b055380698336bc3?pvs=21)

[Put Request in Express](https://www.notion.so/Put-Request-in-Express-10bdcae7238d40b09cbcd615f179b438?pvs=21)

# Next Up

[Todo Backend](https://www.notion.so/Todo-Backend-92b170e095b14428a287cb7786c57a00?pvs=21)