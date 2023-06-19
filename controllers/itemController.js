const Item = require("../models/Item");
const logger = require("../logger");
const { validationResult, body } = require('express-validator');

const createItemValidations = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('language').notEmpty().withMessage('Language is required'),
  body('pages').notEmpty().withMessage('Pages is required'),
];

const updateItemValidations = [
  body('title').optional().notEmpty().withMessage('Title is required'),
  body('author').optional().notEmpty().withMessage('Author is required'),
  body('language').optional().notEmpty().withMessage('Language is required'),
  body('pages').optional().notEmpty().withMessage('Pages is required'),
];

const fetchAllItems = async (req, res) => {
  try {
    // fetching all items from database
    const items = await Item.find();

    res.json({ items });
  } catch (error) {
    logger.error("Failed to fetch items", error);
    res.status(500).json({ message: "Failed to fetch items" });
  }
};
const fetchAllItemsPage = async (req, res) => {
  try {
    const { page, limit } = req.params;

    const skipCount = (page - 1) * limit;

    // Fetching items from database with pagination
    const items = await Item.find()
      .skip(skipCount)
      .limit(limit);

    res.json({ items });
  } catch (error) {
    logger.error("Failed to fetch items", error);
    res.status(500).json({ message: "Failed to fetch items" });
  }
  };

const fetchItemById = async (req, res) => {
  try {
    // fetching id by req
    const { id } = req.params;

    const item = await Item.findById(id);

    // if item of given id is not present
    if (!item) {
      logger.info("Item not found");
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ item });
  } catch (error) {
    logger.error("Failed to fetch item", error);
    res.status(500).json({ message: "Failed to fetch item" });
  }
};

const createItem = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error('Create item validation failed', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, author, language, pages } = req.body;

    const existingItem = await Item.findOne({ title, author });
    if (existingItem) {
      logger.info("Item already exists");
      return res.status(400).json({ message: "Item already exists" });
    }

    const newItem = new Item({
      title,
      author,
      language,
      pages,
    });

    await newItem.save();
    logger.info("Item added to the database successfully");
    res.status(201).json({ message: "Item added to the database successfully" });
  } catch (error) {
    logger.error("Failed to add item", error);
    res.status(500).json({ message: "Failed to add item" });
  }
};

const updateItem = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error('Update item validation failed', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    const itemId = req.params.id;
    const { title, author, language, pages } = req.body;

    const item = await Item.findById(itemId);

    if (!item) {
      logger.info("Item not found");
      return res.status(404).json({ message: "Item not found" });
    }

    if (title) {
      item.title = title;
    }
    if (author) {
      item.author = author;
    }
    if (language) {
      item.language = language;
    }
    if (pages) {
      item.pages = pages;
    }

    await item.save();
    logger.info("Item updated successfully");
    res.json({ message: "Item updated successfully", item });
  } catch (error) {
    logger.error("Failed to update item", error);
    res.status(500).json({ message: "Failed to update item" });
  }
};

const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      logger.info("Item not found");
      return res.status(404).json({ message: "Item not found" });
    }

    logger.info("Item deleted successfully");
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    logger.error("Failed to delete item", error);
    res.status(500).json({ message: "Failed to delete item" });
  }
};

module.exports = {
  fetchAllItems,
  fetchItemById,
  createItem: [...createItemValidations, createItem],
  updateItem: [...updateItemValidations, updateItem],
  deleteItem,
  fetchAllItemsPage
};
