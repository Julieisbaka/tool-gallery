import React from 'react';
import ToolCard from './ToolCard';
import './ToolGrid.css'; // Assuming you have some styles for the grid

const ToolGrid = ({ tools }) => {
    return (
        <div className="tool-grid">
            {tools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
    );
};

export default ToolGrid;