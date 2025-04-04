import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Tool Gallery. All rights reserved.</p>
                <p>
                    <a href="/documentation">Documentation</a> | 
                    <a href="/about">About</a> | 
                    <a href="/contact">Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;