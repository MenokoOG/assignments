const mongoose = require('mongoose');

const bountySchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    living: { type: String, required: true },
    bountyAmount: { type: Number, required: true },
    type: { type: String, required: true }
});

const Bounty = mongoose.model('Bounty', bountySchema);

module.exports = Bounty;
