 
# User Access Management System

This project is a simple User Access Management System implementing Role-Based Access Control (RBAC) using Node.js, Express, TypeORM, PostgreSQL, JWT for backend and React for frontend.

---

## Features

- User Signup and Login with JWT Authentication
- Role-Based Access Control for Employees, Managers, and Admins
- Software management by Admins
- Access requests submission by Employees
- Request approval/rejection by Managers

---

## Technologies Used

- **Backend:** Node.js, Express, TypeORM, PostgreSQL, JWT, bcrypt
- **Frontend:** React, Axios, React Router
- **Database:** PostgreSQL

---

## Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL installed and running
- npm or yarn package manager

---

## Setup Instructions

### Backend Setup

1. Clone the repository and navigate to backend folder (or root if unified):

```bash
cd backend
````

2. Create a `.env` file in the backend root folder with the following environment variables:

```
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASS=your_postgres_password
DB_NAME=user_access_mgmt

PORT=5000


PORT=3001

VITE_API_URL=http://localhost:3001
JWT_SECRET=your_jwt_secret_key
MONGODB=your-mongoDB-key

```

3. Install dependencies:

```bash
npm install
```

4. Start the backend server:

```bash
npm run dev
```

> This will start the backend on `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

> This will start the frontend on `http://localhost:3000`.

---

## Usage

* Open `http://localhost:3000` in your browser.
* Register a new user (default role: Employee).
* Log in to access software list.
* Admin users can add new software via API or future Admin UI.
* Employees can submit access requests (to be implemented in frontend).
* Managers can approve/reject requests (to be implemented in frontend).

---

## Project Structure

```
backend/
  ├── src/
  │   ├── entity/          # TypeORM entities: User, Software, Request
  │   ├── middleware/      # Auth middleware
  │   ├── routes/          # Routes for auth, software, requests
  │   └── server.ts        # Express app entry point
  ├── ormconfig.js         # TypeORM config
  ├── package.json
frontend/
  ├── src/
  │   ├── App.js           # React app main file
  │   └── ...              # Other React components
  ├── package.json
```

---

## API Endpoints (Backend)

| Method | Endpoint                | Description                   | Roles Allowed |
| ------ | ----------------------- | ----------------------------- | ------------- |
| POST   | `/api/auth/signup`      | Create new user               | Public        |
| POST   | `/api/auth/login`       | Authenticate user and get JWT | Public        |
| POST   | `/api/software`         | Add new software              | Admin         |
| GET    | `/api/software`         | List all software             | Authenticated |
| POST   | `/api/requests`         | Submit access request         | Employee      |
| GET    | `/api/requests/pending` | List pending requests         | Manager       |
| PATCH  | `/api/requests/:id`     | Approve/Reject access request | Manager       |

---

## Notes

* Database synchronization is enabled for development; disable in production.
* Passwords are hashed using bcrypt.
* JWT tokens expire in 1 hour.
* Frontend currently has basic login and software list; request submission and approval UI can be added.

---

## Future Improvements

* Full frontend UI for submitting and approving requests
* Admin UI to manage users and software
* Email notifications for request status changes
* More granular permission controls

 # User_Acess_Management
