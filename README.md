# SE Project Express API

## Description

This is a RESTful API server (backend) for the WTWR (What To Wear) Tripleten project, built with Node.js, Express, and MongoDB. It provides user authentication, user profile management, and CRUD operations for clothing items. The API is designed to be used with a React frontend and follows best practices for security and error handling.

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
- celebrate & Joi (request validation)
- ESLint (Airbnb base)
- Prettier
- CORS

## Request Validation

All incoming requests are validated using [celebrate](https://github.com/arb/celebrate) and [Joi](https://joi.dev/) schemas. This ensures that user input and API payloads meet strict requirements for type, format, and length before processing. See `middlewares/validation.js` for implementation details.

## Frontend Integration

This API is designed to be used with the [WTWR React frontend](https://github.com/DKraus-SofEng/se_project_react).

## Deployment

The production API is deployed on Google Cloud and available at:

https://api.wtwr.bot.nu

- The frontend is configured to use this endpoint for API requests in production.
- For local development, use the default: `http://localhost:3001`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3001
JWT_SECRET=your_jwt_secret
MONGODB_URI=mongodb://localhost:27017/wtwr_db
```

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

## Testing

This project uses **Jest** and **Supertest** for automated backend testing.

- API endpoints (users, authentication, clothing items) are covered by integration tests.
- Error handling and validation logic are tested.
- To run tests, use:

```
npm test
```

- Test files are located in the `tests/` folder.

## Project Pitch Video

You can find the project pitch video at: [Watch here](https://www.loom.com/share/2dc68aec7349403e8c3d6b50cf018095)

## License

ISC
