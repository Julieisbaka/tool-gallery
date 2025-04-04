import React, { useEffect, useState } from 'react';
import ToolGrid from '../components/Gallery/ToolGrid';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Gallery = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const response = await fetch('/api/tools');
                const data = await response.json();
                setTools(data);
            } catch (error) {
                console.error('Error fetching tools:', error);
            }
        };

        fetchTools();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <h1>Tool Gallery</h1>
                <ToolGrid tools={tools} />
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;