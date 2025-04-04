import React from 'react';

const ToolCard = ({ tool }) => {
    return (
        <div className="tool-card">
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <img src={tool.imageUrl} alt={tool.name} />
            <a href={tool.link} target="_blank" rel="noopener noreferrer">Use Tool</a>
        </div>
    );
};

export default ToolCard;