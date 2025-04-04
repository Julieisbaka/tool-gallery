import React, { useState } from 'react';
import axios from 'axios';

const ToolCreator = () => {
    const [toolName, setToolName] = useState('');
    const [toolDescription, setToolDescription] = useState('');
    const [toolFile, setToolFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setToolFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', toolName);
        formData.append('description', toolDescription);
        formData.append('file', toolFile);

        try {
            const response = await axios.post('/api/tools', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
            setToolName('');
            setToolDescription('');
            setToolFile(null);
        } catch (error) {
            setMessage('Error uploading tool. Please try again.');
        }
    };

    return (
        <div>
            <h2>Create a New Tool</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tool Name:</label>
                    <input
                        type="text"
                        value={toolName}
                        onChange={(e) => setToolName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tool Description:</label>
                    <textarea
                        value={toolDescription}
                        onChange={(e) => setToolDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload Tool File:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Create Tool</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ToolCreator;