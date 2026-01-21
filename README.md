# Authentication & Authorization System

A secure backend authentication system built with Node.js, Express.js, and MongoDB featuring JWT-based authentication and password hashing.

## Features

- JWT-based token authentication
- Bcrypt password hashing
- Input validation and error handling
- RESTful API with modular architecture
- Protected routes with middleware

## Tech Stack

- Node.js & Express.js
- MongoDB
- JWT (jsonwebtoken)
- Bcrypt
- dotenv

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd auth-backend

# Install dependencies
npm install

# Create .env file
MONGODB_URI=mongodb://localhost:27017
JWT_SECRET=your_secret_key_here
PORT=3000

# Start server
npm start
```

## API Endpoints

### Signup
```http
POST /signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Profile (Protected)
```http
GET /profile
Authorization: Bearer <your_jwt_token>
```

## Testing

```bash
# Signup
curl -X POST http://localhost:3000/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"pass123"}'

# Login
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123"}'
```

## Project Structure

```
├── index.js           # Main application
├── dbconnection.js    # MongoDB configuration
├── .env              # Environment variables
└── package.json      # Dependencies
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | `mongodb://localhost:27017` |
| JWT_SECRET | Secret key for JWT | `your_secret_key` |
| PORT | Server port | `3000` |

