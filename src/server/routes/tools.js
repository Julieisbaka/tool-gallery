const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');

// Route to create a new tool
router.post('/', toolController.createTool);

// Route to get all tools
router.get('/', toolController.getAllTools);

// Route to get a specific tool by ID
router.get('/:id', toolController.getToolById);

// Route to update a tool by ID
router.put('/:id', toolController.updateTool);

// Route to delete a tool by ID
router.delete('/:id', toolController.deleteTool);

module.exports = router;