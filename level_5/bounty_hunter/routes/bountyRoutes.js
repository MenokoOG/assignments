const express = require('express');
const router = express.Router();
const bountyController = require('../controllers/bountyController');

router.get('/', bountyController.getAllBounties);
router.post('/', bountyController.createBounty);
router.delete('/:id', bountyController.deleteBounty);
router.put('/:id', bountyController.updateBounty);

module.exports = router;
