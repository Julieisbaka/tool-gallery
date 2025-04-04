import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const ToolEditor = () => {
    const { id } = useParams();
    const history = useHistory();
    const [tool, setTool] = useState({ name: '', description: '', version: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTool = async () => {
            try {
                const response = await axios.get(`/api/tools/${id}`);
                setTool(response.data);
            } catch (err) {
                setError('Error fetching tool data');
            } finally {
                setLoading(false);
            }
        };
        fetchTool();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTool({ ...tool, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/tools/${id}`, tool);
            history.push(`/tools/${id}`);
        } catch (err) {
            setError('Error updating tool');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Edit Tool</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={tool.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={tool.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Version:</label>
                    <input
                        type="text"
                        name="version"
                        value={tool.version}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Tool</button>
            </form>
        </div>
    );
};

export default ToolEditor;