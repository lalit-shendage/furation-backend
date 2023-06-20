const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const { verifyToken } = require("../middleware/validationMiddleware");

// fetching all items
router.get("/", verifyToken, itemController.fetchAllItems);

// fetching items by page and page limit
router.get("/page", verifyToken, itemController.fetchAllItemsPage);

// fetching item by id
router.get("/:id", verifyToken, itemController.fetchItemById);

// creating item
router.post("/", verifyToken, itemController.createItem);

// Updating item
router.put("/:id", verifyToken, itemController.updateItem);

// deleting item
router.delete("/:id", verifyToken, itemController.deleteItem);

module.exports = router;
