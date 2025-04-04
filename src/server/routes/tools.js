const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');
const rateLimit = require('express-rate-limit');

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per windowMs
});

// Apply rate limiter to all routes
router.use(limiter);

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