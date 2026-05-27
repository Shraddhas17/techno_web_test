# Backend Debugging Guide

## Step 1: Verify Backend Setup

### Check if server is running:
```bash
curl http://localhost:5000/api/health
```
Expected response: `{ "status": "Server is running" }`

### Check environment configuration:
```bash
curl http://localhost:5000/api/debug
```
This will show all environment variables and settings.

---

## Step 2: Test Admin Login

1. **Login as Admin:**
```bash
curl -X POST http://localhost:5000/api/auth/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@technosignia.com",
    "password": "Admin@123"
  }'
```

Expected response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "admin",
    "email": "admin@technosignia.com",
    "role": "admin",
    "name": "Admin"
  }
}
```

2. **Save the token from response and use it for next step**

---

## Step 3: Test Add Student (with token)

Replace `YOUR_TOKEN_HERE` with the token from Step 2:

```bash
curl -X POST http://localhost:5000/api/students/add \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "course": "Java Full Stack",
    "password": "test@123"
  }'
```

---

## Common Issues & Solutions

### ❌ Error: "MongoDB connection error"
**Solution:**
- Ensure MongoDB is installed and running
- Windows: Open MongoDB Compass or check if `mongod` is running
- Linux/Mac: Run `mongod` in terminal

### ❌ Error: "No token provided"
**Solution:**
- Make sure you're using `Bearer ` prefix with the token
- Header should be: `Authorization: Bearer <token>`

### ❌ Error: "Invalid or expired token"
**Solution:**
- The JWT secret in your `.env` must match the JWT secret used during login
- Check `.env` file has: `JWT_SECRET=your_jwt_secret_key`

### ❌ Error: "E11000 duplicate key error collection: Email already registered"
**Solution:**
- Email already exists in database
- Use a different email or delete the existing student from MongoDB

### ❌ Error: "Cannot find module"
**Solution:**
```bash
cd backend
npm install
```

---

## Step 4: Frontend Testing

Once backend works, test from frontend:

1. **Clear localStorage:**
   - Open DevTools (F12)
   - Go to Application > Local Storage
   - Clear all storage

2. **Login as Admin:**
   - Click user icon in navbar
   - Select "Admin"
   - Email: `admin@technosignia.com`
   - Password: `Admin@123`
   - Click Sign In

3. **Add Student from Admin Panel:**
   - Fill all fields
   - Click "Add Student"
   - Check response in Console (F12 > Console tab)

---

## MongoDB Check

**To verify MongoDB is working:**

1. **Windows:**
   - Open MongoDB Compass (GUI tool)
   - Check if connected to `mongodb://127.0.0.1:27017`

2. **Command Line:**
```bash
mongosh
> show dbs
> use technosignia-website
> db.users.find()
```

---

## Clear Everything & Fresh Start

If stuck, try this fresh start:

1. **Clear Frontend:**
```bash
cd technosignia-website-v2
rm -rf node_modules package-lock.json
npm install
npm start
```

2. **Clear Backend:**
```bash
cd ../backend
rm -rf node_modules package-lock.json
npm install
npm start
```

3. **Clear MongoDB:**
```bash
mongosh
> use technosignia-website
> db.users.deleteMany({})
```

---

## Environment Variables Check

Make sure `.env` has these exact values:

```
MONGO_URI='mongodb://127.0.0.1:27017/technosignia-website'
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@technosignia.com
ADMIN_PASSWORD=Admin@123
PORT=5000
```

---

## Console Logs

When running backend, you should see logs like:
```
Server running on port 5000
MongoDB connected successfully
Auth successful for user: admin admin
Add student request received with data: {...}
Student added successfully: <id>
```

If you don't see "MongoDB connected successfully", MongoDB isn't running!
