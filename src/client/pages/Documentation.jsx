import React from 'react';

const Documentation = () => {
    return (
        <div className="documentation">
            <h1>Tool Gallery Documentation</h1>
            <p>Welcome to the Tool Gallery! This documentation will guide you through the features of the application and how to create and manage your tools.</p>
            
            <h2>Getting Started</h2>
            <p>To get started, you need to create an account or log in using your GitHub credentials. Once logged in, you can create, edit, and upload your tools to the gallery.</p>
            
            <h2>Creating a Tool</h2>
            <p>To create a new tool, navigate to the "Create Tool" page. Fill out the form with the necessary details about your tool, including its name, description, and any relevant files. Once submitted, your tool will be uploaded to the gallery.</p>
            
            <h2>Editing a Tool</h2>
            <p>If you need to make changes to an existing tool, you can do so by navigating to the tool's details page and clicking on the "Edit" button. This will take you to the Tool Editor where you can update the information.</p>
            
            <h2>Using Tools</h2>
            <p>All tools uploaded to the gallery can be viewed in the "Gallery" section. You can click on any tool to see its details and use it as needed.</p>
            
            <h2>Additional Resources</h2>
            <ul>
                <li><a href="/docs/tool-creation-guide.md">Tool Creation Guide</a></li>
                <li><a href="/docs/user-guide.md">User Guide</a></li>
                <li><a href="/docs/api-docs.md">API Documentation</a></li>
            </ul>
            
            <h2>Support</h2>
            <p>If you encounter any issues or have questions, please reach out to our support team via GitHub.</p>
        </div>
    );
};

export default Documentation;