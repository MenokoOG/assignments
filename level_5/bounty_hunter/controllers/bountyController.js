const Bounty = require('../models/Bounty');

exports.getAllBounties = async (req, res) => {
    try {
        const bounties = await Bounty.find();
        res.json(bounties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBounty = async (req, res) => {
    const { firstName, lastName, living, bountyAmount, type } = req.body;

    try {
        const newBounty = new Bounty({
            firstName,
            lastName,
            living,
            bountyAmount,
            type
        });

        await newBounty.save();
        res.status(201).json(newBounty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteBounty = async (req, res) => {
    const { id } = req.params;

    try {
        await Bounty.findByIdAndDelete(id);
        res.json({ message: 'Bounty deleted successfully' });
    } catch (err) {
        res.status(404).json({ message: 'Bounty not found' });
    }
};

exports.updateBounty = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, living, bountyAmount, type } = req.body;

    try {
        const updatedBounty = await Bounty.findByIdAndUpdate(id, {
            firstName,
            lastName,
            living,
            bountyAmount,
            type
        }, { new: true });

        res.json(updatedBounty);
    } catch (err) {
        res.status(404).json({ message: 'Bounty not found' });
    }
};
