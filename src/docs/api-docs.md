# API Documentation for Tool Gallery

## Overview
The Tool Gallery API allows users to create, manage, and interact with tools uploaded to the gallery. The API is built using Node.js and Express, and it utilizes GitHub for authentication and storage.

## Authentication
All API requests require authentication via GitHub OAuth. Users must log in to access protected routes.

### Login
- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **200 OK:** Returns a JWT token.
  - **401 Unauthorized:** Invalid credentials.

### Register
- **Endpoint:** `POST /api/auth/register`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **201 Created:** User registered successfully.
  - **400 Bad Request:** Validation errors.

## Tools Management

### Create Tool
- **Endpoint:** `POST /api/tools`
- **Description:** Creates a new tool.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "image": "string",
    "githubRepo": "string"
  }
  ```
- **Response:**
  - **201 Created:** Tool created successfully.
  - **400 Bad Request:** Validation errors.

### Get All Tools
- **Endpoint:** `GET /api/tools`
- **Description:** Retrieves a list of all tools.
- **Response:**
  - **200 OK:** Returns an array of tools.

### Get Tool Details
- **Endpoint:** `GET /api/tools/:id`
- **Description:** Retrieves details of a specific tool.
- **Response:**
  - **200 OK:** Returns tool details.
  - **404 Not Found:** Tool not found.

### Update Tool
- **Endpoint:** `PUT /api/tools/:id`
- **Description:** Updates an existing tool.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "image": "string",
    "githubRepo": "string"
  }
  ```
- **Response:**
  - **200 OK:** Tool updated successfully.
  - **404 Not Found:** Tool not found.
  - **400 Bad Request:** Validation errors.

### Delete Tool
- **Endpoint:** `DELETE /api/tools/:id`
- **Description:** Deletes a specific tool.
- **Response:**
  - **204 No Content:** Tool deleted successfully.
  - **404 Not Found:** Tool not found.

## Error Handling
All API responses include a status code and a message. In case of an error, the response will contain:
```json
{
  "error": "string"
}
```

## Conclusion
This API documentation provides a comprehensive overview of the endpoints available for managing tools in the Tool Gallery. For further assistance, refer to the user guide and tool creation guide available in the documentation.