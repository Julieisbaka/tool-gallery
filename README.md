# Tool Gallery

Welcome to the Tool Gallery project! This application allows users to create, upload, and share tools with others. It utilizes GitHub for authentication and storage, ensuring a secure and efficient experience for all users.

## Features

- **User Authentication**: Users can register and log in using their GitHub accounts.
- **Tool Creation**: Users can create new tools and upload them to the gallery.
- **Tool Gallery**: A visually appealing gallery that displays all uploaded tools.
- **Tool Editing**: Users can edit their existing tools.
- **Documentation**: Comprehensive guides for users on how to create tools and navigate the application.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- A GitHub account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tool-gallery.git
   ```
2. Navigate to the project directory:
   ```
   cd tool-gallery
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory based on the `.env.example` file.
2. Add your GitHub OAuth credentials to the `.env` file.

### Running the Application

1. Start the server:
   ```
   npm run server
   ```
2. In a new terminal, start the client:
   ```
   npm run client
   ```
3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Documentation

For detailed information on using the application, please refer to the following guides:

- [API Documentation](src/docs/api-docs.md)
- [Tool Creation Guide](src/docs/tool-creation-guide.md)
- [User Guide](src/docs/user-guide.md)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support and inspiration.