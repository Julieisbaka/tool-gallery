import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Tool Gallery</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/create-tool">Create Tool</a></li>
                    <li><a href="/documentation">Documentation</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;