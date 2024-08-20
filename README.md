# Notes Management System

## Overview

The Notes Management System is a comprehensive web application for managing personal notes. It allows users to register, log in, and perform CRUD operations on their notes. The project comprises a frontend for user interactions and a backend for data management.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT
- **Frontend**: HTML, CSS, JavaScript
- **Mailer**: Ethereal Email (for development and testing)

## Project Structure

- **`/backend`**: Contains server-side logic, including API routes, controllers, and database configuration.
- **`/frontend`**: Includes client-side files such as HTML, CSS, and JavaScript.

## Setup and Installation

### Backend

1. **Clone the Repository**:
   - Clone the GitHub repository and navigate to the `/backend` directory.

2. **Install Dependencies**:
   - Run `npm install` to install the necessary packages.

3. **Configure Environment Variables**:
   - Create a `.env` file with configurations for the port, JWT secret, database URI, and mailer credentials.

4. **Start the Server**:
   - Use `npm start` or a similar command to launch the server.

### Frontend

1. **Navigate to the Frontend Directory**:
   - Go to the `/frontend` directory.

2. **Open HTML Files**:
   - Open the HTML files in a web browser or use a local server to serve them.

## API Endpoints

### User Endpoints

- **POST `/users/register`**: Register a new user.
- **POST `/users/login`**: Authenticate and log in a user.

### Notes Endpoints

- **GET `/notes`**: Retrieve all notes.
- **POST `/notes`**: Create a new note.
- **PUT `/notes/:id`**: Update an existing note.
- **DELETE `/notes/:id`**: Delete a note.

## Frontend UI

- **Login Page**: For user authentication.
- **Register Page**: For user registration.
- **Notes Management Page**: To create, update, and delete notes.

## Email Configuration with Ethereal

Ethereal Email is used for testing email functionality during development.

1. **Create an Ethereal Account**:
   - Register at Ethereal Email.

2. **Update Environment Variables**:
   - Include your Ethereal Email credentials in the backend environment variables.

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request with your enhancements or fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For support or inquiries, email [a7medhassan](mailto:assanamed@gmail.com).
