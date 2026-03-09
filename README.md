# Kids Hobby Hub

A full-stack mobile-first web application designed to help parents find and enroll their children in hobby classes, and for instructors to list and manage their classes.

## Tech Stack
* **Frontend:** Next.js 14+ (App Router), React, CSS Modules / Custom CSS
* **Backend:** Node.js, Express
* **Database:** MongoDB (using Mongoose)
* **Authentication:** JSON Web Tokens (JWT)

---

## 🚀 Running the Project Locally

### Prerequisites
* Node.js installed (v18+)
* MongoDB installed and running locally on port `27017` (or provide a remote MongoDB URI in the `.env` file).

### 1. Backend Setup

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd "d:\Antigravity\kids hobby app\backend"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure your MongoDB instance is running. The default connection string in `.env` is `mongodb://localhost:27017/kids_hobby_hub`.
4. Start the backend development server:
   ```bash
   npm run dev
   # (If you don't have nodemon installed, you can just run: node server.js)
   ```
   *The Express API will now be running at `http://localhost:5000`.*

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd "d:\Antigravity\kids hobby app\frontend"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *The web application will now be running at `http://localhost:3000`.*

---

## 📁 Project Structure Highlights

### `backend/`
* `src/models/` - Mongoose schemas for User, Class, Booking, and Review.
* `src/controllers/` - Logic for processing requests and interfacing with the database.
* `src/routes/` - Express route definitions mapping endpoints to controllers.
* `src/middlewares/` - Global error handling and JWT-based protection `(auth.js)`.

### `frontend/`
* `src/app/` - Next.js App Router for all application pages (`page.tsx`, `layout.tsx`, `classes/page.tsx`, etc.).
* `src/app/globals.css` - Custom, beautiful design system providing color tokens, card styles, and utility classes.

## Features Built
- Backend Models & Relations (Instructors -> Classes -> Bookings -> Parents)
- JWT Secure Authentication
- Generic Error Handler Middleware
- Example Frontend Landing, Class Listings, and Login pages
- Rich custom CSS using gorgeous gradients, hover effects, and typography overrides.
