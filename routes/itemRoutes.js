const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { verifyToken } = require('../middleware/validationMiddleware');

router.get('/', verifyToken, itemController.fetchAllItems);

router.get('/:page/:limit', verifyToken, itemController.fetchAllItemsPage);

router.get('/:id', verifyToken, itemController.fetchItemById);

router.post('/',verifyToken, itemController.createItem);

router.put('/:id', verifyToken, itemController.updateItem);

router.delete('/:id', verifyToken, itemController.deleteItem)

module.exports = router;