# Gamify Wellness Backend

This is the backend server for the **Gamify Wellness App**, built using **Node.js, Express, and MongoDB**. The app allows users to register, log in, and interact with yoga asanas while tracking their wellness progress.

## Features
- User Authentication (Signup, Login, Logout)
- JWT-based Authentication & Authorization
- Role-based access control (Admin/User)
- CRUD operations for Yoga Asanas
- Token Blacklisting for Secure Logout

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose ORM)**
- **JWT for Authentication**
- **bcrypt for Password Hashing**
- **dotenv for Environment Variables**
- **CORS for Cross-Origin Requests**


## API Endpoints

### User Authentication Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users/signIn` | Register a new user |
| POST | `/users/login` | Login a user and get tokens |
| GET | `/users/logout` | Logout and blacklist tokens |

### Yoga Asana Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/yoga/addyoga` | Add a new yoga asana (Authenticated) |
| GET | `/yoga/allyoga` | Get all yoga asanas |

## Project Structure
```
backend/
│── Controller/
│   ├── userRoutes.js
│   ├── yogaAsanasRoutes.js
│── Middleware/
│   ├── auth.js
│── Model/
│   ├── userModel.js
│   ├── yogaAsanasModel.js
│── config/
│   ├── db.js
│── index.js
│── package.json
│── .env (to be created)
│── README.md
```

## Environment Variables
 
 - port=port name

- database= database url

- key=jwt secret key


Happy coding! 🚀

