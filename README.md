# SE Project Express API

## Description

This is a RESTful API server (backend) for the WTWR (What To Wear) project, built with Node.js, Express, and MongoDB.  
It provides user authentication, user profile management, and CRUD operations for clothing items.  
The API is designed to be used with a React frontend and follows best practices for security and error handling.

## Features

- User registration and login with JWT authentication
- Secure password hashing with bcrypt
- Get and update current user profile
- Add, view, like, and delete clothing items
- Only item owners can delete their items
- Comprehensive error handling and validation

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- ESLint (Airbnb base)
- Prettier
- CORS

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/DKraus-SofEng/se_project_express.git
   cd se_project_express
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start MongoDB locally (default: `mongodb://localhost:27017/wtwr_db`).

4. Run the server in development mode:
   ```sh
   npm run dev
   ```
   Or in production mode:
   ```sh
   npm start
   ```

## API Endpoints

### Users

- `POST /signup` — Register a new user
- `POST /signin` — Login and receive a JWT
- `GET /users/me` — Get current user profile (auth required)
- `PATCH /users/me` — Update user profile (auth required)

### Clothing Items

- `GET /items` — Get all clothing items
- `POST /items` — Add a new item (auth required)
- `DELETE /items/:id` — Delete an item (owner only, auth required)
- `PUT /items/:id/likes` — Like an item (auth required)
- `DELETE /items/:id/likes` — Unlike an item (auth required)

## Error Handling

- Returns appropriate status codes and messages for all errors (400, 401, 403, 404, 409, 500).
- All error responses contain a `message` field only.

## Project Pitch Video

You can find the project pitch video at: [\[URL to be added later\]](https://www.loom.com/share/1283351aac1f48828d67e8e5694f8ed6).

## License

ISC

---
