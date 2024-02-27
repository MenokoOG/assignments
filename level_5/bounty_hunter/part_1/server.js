const express = require('express');
const uuid = require('uuid')

const app = express();
const PORT = 3000;

//middleware to parse json
app.use(express.json());

//array to store bounties
let bounties = []

//GET endpoint
app.get('/bounty', (req, res) => {
    res.json(bounties)
});

// POST endpoint to add bounty
app.post('/bounty', (req, res) => {
    const {firstName, lastName, living, bountyAmount, type} = req.body;

    // validate request body
    if (!firstName || !lastName || !living || !bountyAmount || !type) {
        return res.status(400).json({message: 'Please provide all required fields.'});
    }

    // create new bounty object
    const newBounty = {
        id: uuid.v4(),
        firstName,
        lastName,
        living,
        bountyAmount,
        type
    }

    // add new bounty to array
    bounties.push(newBounty)

    res.status(201).json(newBounty)
    res.send(`Successfully added "${newBounty}" to the database.`)
})

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})