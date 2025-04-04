import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ToolDetails = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchToolDetails = async () => {
            try {
                const response = await fetch(`/api/tools/${toolId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tool details');
                }
                const data = await response.json();
                setTool(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchToolDetails();
    }, [toolId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>{tool.name}</h1>
            <p>{tool.description}</p>
            <img src={tool.imageUrl} alt={tool.name} />
            <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
};

export default ToolDetails;