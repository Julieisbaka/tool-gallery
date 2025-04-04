const Tool = require('../models/Tool');
const validator = require('validator');

// Create a new tool
exports.createTool = async (req, res) => {
    try {
        const toolData = req.body;
        const newTool = new Tool(toolData);
        await newTool.save();
        res.status(201).json(newTool);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all tools
exports.getAllTools = async (req, res) => {
    try {
        const tools = await Tool.find();
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a tool by ID
exports.getToolById = async (req, res) => {
    try {
        const tool = await Tool.findById(req.params.id);
        if (!tool) {
            return res.status(404).json({ message: 'Tool not found' });
        }
        res.status(200).json(tool);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a tool by ID
exports.updateTool = async (req, res) => {
    try {
        const updateData = {};
        for (const key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                updateData[key] = validator.escape(req.body[key]);
            }
        }
        // Validate updateData against the Tool schema
        const validFields = ['name', 'description', 'price']; // Example fields
        const isValid = Object.keys(updateData).every(key => validFields.includes(key));
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid update data' });
        }
        const tool = await Tool.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!tool) {
            return res.status(404).json({ message: 'Tool not found' });
        }
        res.status(200).json(tool);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a tool by ID
exports.deleteTool = async (req, res) => {
    try {
        const tool = await Tool.findByIdAndDelete(req.params.id);
        if (!tool) {
            return res.status(404).json({ message: 'Tool not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};