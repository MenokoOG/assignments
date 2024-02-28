const express = require('express');
const uuid = require('uuid')
const morgan = require('morgan');

const app = express();
const PORT = 3000;

//middleware to parse json
app.use(express.json());
app.use(morgan('dev'))

//array to store bounties
let bounties = []

//GET endpoint
app.get('/api/bounty', (req, res) => {
    res.json(bounties)
});

// POST endpoint to add bounty
app.post('/api/bounty', (req, res) => {
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
})

// DELETE endpoint to remove a bounty by ID
app.delete('/api/bounty/:id', (req, res) => {
    const { id } = req.params;

    // Find index of bounty with given ID
    const index = bounties.findIndex(bounty => bounty.id === id);

    // If bounty not found
    if (index === -1) {
        return res.status(404).json({ message: 'Bounty not found' });
    }

    // Remove bounty from array
    bounties.splice(index, 1);

    res.status(200).json({ message: 'Bounty deleted successfully' });
});

// PUT endpoint to update an existing bounty
app.put('/api/bounty/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, living, bountyAmount, type } = req.body;

    // Find index of bounty with given ID
    const index = bounties.findIndex(bounty => bounty.id === id);

    // If bounty not found
    if (index === -1) {
        return res.status(404).json({ message: 'Bounty not found' });
    }

    // Update bounty fields
    bounties[index] = {
        id,
        firstName,
        lastName,
        living,
        bountyAmount,
        type
    };

    res.status(200).json(bounties[index]);
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
