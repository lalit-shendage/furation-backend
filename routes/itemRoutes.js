const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { verifyToken } = require('../middleware/validationMiddleware');

router.get('/',verifyToken, itemController.fetchAllItems);
router.get('/:id',verifyToken, itemController.fetchItemById);

module.exports = router;