import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Navigation from '../components/common/Navigation';
import ToolGrid from '../components/Gallery/ToolGrid';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                <h1>Welcome to the Tool Gallery</h1>
                <p>Discover and create tools that can help you in your projects.</p>
                <ToolGrid />
            </main>
            <Footer />
        </div>
    );
};

export default Home;