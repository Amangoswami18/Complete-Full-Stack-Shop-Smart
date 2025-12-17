# 🚀 Retail Store - Complete Setup Guide

## 📦 What's Included

✅ **Backend (Node.js + Express + MongoDB)**
- Session-based authentication (NO JWT)
- Product CRUD with image upload
- Order management with status updates
- Dashboard with analytics
- MongoDB with Mongoose ODM

✅ **Frontend (React + Tailwind CSS)**
- Customer storefront with product catalog
- Shopping cart and checkout
- Admin portal with dashboard
- Product and order management
- Responsive design

✅ **Features Completed**
- 10 sample products with Unsplash images
- Search and filter products
- Cart management with validation
- Order placement with validation
- Admin authentication (session-based)
- Stock management
- Order status tracking
- Dashboard statistics

## 🛠️ Installation Steps

### Prerequisites
```bash
# Check if installed
node --version   # Should be v16 or higher
npm --version
mongo --version  # Or MongoDB Compass for GUI
```

### Step 1: Extract ZIP File
```bash
unzip retail-store-complete.zip
cd retail-store-project
```

### Step 2: Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
# The .env file is already created with default values
# Edit if needed:
nano .env

# Default .env contents:
PORT=5000
MONGODB_URI=**************
SESSION_SECRET=**************
NODE_ENV=**********
CLIENT_URL=http://localhost:3000
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/retail-store?retryWrites=true&w=majority
```

### Step 3: Seed Database

```bash
# Make sure MongoDB is running
# For local MongoDB:
sudo systemctl start mongod

# OR start MongoDB manually:
mongod --dbpath /path/to/data

# Seed the database with sample data
npm run seed

# You should see:
# ✅ MongoDB Connected
# 🗑️  Clearing existing data...
# 👤 Creating admin user...
#    Email: admin@retailstore.com
#    Password: admin123
# 📦 Creating products...
# ✅ 10 products created
```

### Step 4: Start Backend Server

```bash
npm run dev

### Step 5: Setup Frontend

**Open NEW terminal:**

```bash
cd frontend

# Install dependencies
npm install

# The .env file is already created
# No need to change unless backend port is different
cat .env
# REACT_APP_API_URL=http://localhost:5000/api

# Start frontend
npm start

# Browser will automatically open at http://localhost:3000
```

## Default Admin Credentials

```
Email: admin@retailstore.com
Password: admin123
```

##  Testing the Application

### Customer Flow (Public):

1. **Browse Products**
   - Visit: http://localhost:3000
   - Search products by name
   - Filter by category
   - View product details

2. **Shopping Cart**
   - Add products to cart
   - Update quantities
   - Remove items
   - See real-time total calculation

3. **Checkout Process**
   - Click "Proceed to Checkout"
   - Fill shipping information:
     - Full Name
     - Email
     - 10-digit phone number
     - Complete address
   - Place order
   - Get order confirmation with order number

### Admin Flow (Protected):

1. **Login**
   - Visit: http://localhost:3000/admin
   - Use default credentials
   - Session created (no JWT!)

2. **Dashboard**
   - View today's orders and revenue
   - See total revenue
   - Check low stock items
   - Recent orders list
   - Orders by status

3. **Product Management**
   - View all products in table
   - Add new product with image
   - Edit existing products
   - Delete products
   - Toggle Active/Inactive status
   - Filter by category and status

4. **Order Management**
   - View all orders
   - Filter by status and date
   - Search by order number/customer
   - Update order status
   - View full order details

5. **Logout**
   - Click logout
   - Session destroyed
   - Redirected to login

## Project Structure

```
retail-store-project/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── authController.js    # Login/Logout/Session
│   │   │   ├── productController.js # Product CRUD
│   │   │   └── orderController.js   # Order management
│   │   ├── middleware/
│   │   │   ├── auth.js              # Session authentication
│   │   │   └── upload.js            # Image upload (Multer)
│   │   ├── models/
│   │   │   ├── User.js              # Admin user model
│   │   │   ├── Product.js           # Product model
│   │   │   └── Order.js             # Order model
│   │   ├── routes/
│   │   │   ├── auth.js              # Auth routes
│   │   │   ├── products.js          # Product routes
│   │   │   └── orders.js            # Order routes
│   │   ├── utils/
│   │   │   └── seed.js              # Database seeding
│   │   ├── public/
│   │   │   └── uploads/             # Product images
│   │   └── server.js                # Express app
│   ├── .env                         # Environment variables
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js            # Navigation bar
    │   │   ├── ProductCard.js       # Product display
    │   │   └── Loading.js           # Loading spinner
    │   ├── context/
    │   │   ├── CartContext.js       # Cart state management
    │   │   └── AuthContext.js       # Auth state management
    │   ├── pages/
    │   │   ├── Home.js              # Product catalog
    │   │   ├── ProductDetail.js     # Single product
    │   │   ├── Cart.js              # Shopping cart
    │   │   ├── Checkout.js          # Checkout form
    │   │   ├── OrderSuccess.js      # Order confirmation
    │   │   └── admin/
    │   │       ├── AdminLogin.js    # Admin login
    │   │       ├── AdminDashboard.js# Dashboard
    │   │       ├── AdminProducts.js # Product list
    │   │       ├── ProductForm.js   # Add/Edit product
    │   │       ├── AdminOrders.js   # Order list
    │   │       └── OrderDetail.js   # Order details
    │   ├── services/
    │   │   └── api.js               # API calls
    │   ├── App.js                   # Main app with routes
    │   ├── index.js                 # Entry point
    │   └── index.css                # Tailwind + custom CSS
    ├── public/
    │   └── index.html
    ├── .env                         # API URL
    ├── tailwind.config.js           # Tailwind configuration
    └── package.json
```

## 🔧 NPM Commands

### Backend:
```bash
npm install          # Install dependencies
npm run dev          # Start development server (nodemon)
npm start            # Start production server
npm run seed         # Seed database with sample data
```

### Frontend:
```bash
npm install          # Install dependencies
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
```

##  Key Features Explained

### 1. Session-Based Authentication
- Sessions stored in MongoDB using `connect-mongo`
- HTTP-only cookies for security
- Automatic session expiry (24 hours)

### 2. Cart Management
- Stored in localStorage
- Persists across browser sessions
- Real-time stock validation
- Cannot exceed available stock

### 3. Order Processing
- Validates customer information
- Checks stock availability
- Reduces stock on order placement
- Restores stock on cancellation
- Calculates 18% tax automatically

### 4. Image Upload
- Single image per product
- Max size: 2MB
- Formats: JPG, PNG
- Stored in `/backend/src/public/uploads/`
- Accessible via `/uploads/` route

### 5. Dashboard Statistics
- Today's orders count
- Today's revenue
- Total revenue
- Low stock alerts (< 10 items)
- Recent orders
- Orders by status

## Common Issues & Solutions

### Issue: MongoDB Connection Error
```bash
# Solution 1: Start MongoDB
sudo systemctl start mongod

# Solution 2: Check if MongoDB is running
sudo systemctl status mongod

# Solution 3: Use MongoDB Atlas
# Update MONGODB_URI in .env with Atlas connection string
```

### Issue: Session Not Working
```bash
# Clear browser cookies
# Or use incognito mode

# Make sure CORS is properly configured
# Check CLIENT_URL in backend .env matches frontend URL
```

### Issue: Images Not Uploading
```bash
# Check uploads directory exists
mkdir -p backend/src/public/uploads

# Check permissions
```

### Issue: Cannot Login
```bash
# Re-run seed script
cd backend
npm run seed

# Default credentials:
# Email: admin@retailstore.com
# Password: admin123
```

## Sample Data

The seed script creates:
- **1 Admin User** (admin@retailstore.com)
- **10 Products** across 3 categories:
  - Electronics: 3 products
  - Fashion: 4 products
  - Home & Living: 3 products
- All products use Unsplash images
- Stock ranges from 18-60 items
- Prices range from ₹1,299 to ₹24,999


## 📝 API Endpoints

### Public Routes:
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/orders` - Place order

### Protected Routes (Admin):
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/check` - Check session
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order details
- `PATCH /api/orders/:id/status` - Update order status
- `GET /api/orders/dashboard/stats` - Get dashboard stats

### Quick Start:
1. Extract ZIP
2. `cd backend && npm install && npm run seed && npm run dev`
3. `cd frontend && npm install && npm start`
4. Visit http://localhost:3000
5. Admin at http://localhost:3000/admin (admin@retailstore.com / admin123)

**Best of luck!! **

---

Need help? Check:
- README.md for overview
- Comments in code for details
- Console logs for debugging
