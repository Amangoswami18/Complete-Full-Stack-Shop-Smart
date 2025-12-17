# Retail Store - Full Stack Application

Complete retail management system with Admin Portal and Customer Storefront.

## Features

### Customer Storefront
- Product catalog with search functionality
- Product details with image gallery
- Shopping cart (add/update/remove items)
- Checkout with validation
- Order confirmation with order ID

### Admin Portal
- Session-based authentication
- Product management (CRUD operations)
- Order management with status updates
- Dashboard with analytics
- Image upload for products

## Tech Stack

### Frontend
- React Js
- React Router v6
- Tailwind CSS
- Axios
- React Context API

### Backend
- Node.js & Express
- MongoDB with Mongoose
- Express Session (Session-based auth)
- Multer (File uploads)
- bcryptjs (Password hashing)


## ⚙️ Setup Instructions

### Prerequisites
- Node.js
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd retail-store-project
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
PORT=5000
MONGODB_URI=mongodb:******************
SESSION_SECRET=your-**************
NODE_ENV=************
CLIENT_URL=************
```

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/retail-store?retryWrites=true&w=majority
```

Seed database with sample data:
```bash
npm run seed
```

Start backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open new terminal:
```bash
cd frontend
npm install
```

Create `.env` file in frontend folder:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## Default Admin Credentials

```
Email: admin@retailstore.com
Password: admin123
```

## Sample Data

The seed script creates:
- 1 Admin user
- 10 Products across 3 categories (Electronics, Fashion, Home & Living)
- Sample images from Unsplash

## 🎯 API Endpoints

### Authentication
- POST `/api/auth/login` - Admin login
- POST `/api/auth/logout` - Admin logout
- GET `/api/auth/check` - Check session

### Products (Public)
- GET `/api/products` - Get all active products (with search & pagination)
- GET `/api/products/:id` - Get product details

### Products (Admin)
- POST `/api/products` - Create product
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product
- PATCH `/api/products/:id/status` - Update product status

### Orders (Public)
- POST `/api/orders` - Place order

### Orders (Admin)
- GET `/api/orders` - Get all orders (with filters)
- GET `/api/orders/:id` - Get order details
- PATCH `/api/orders/:id/status` - Update order status

### Dashboard (Admin)
- GET `/api/orders/dashboard/stats` - Get dashboard statistics

## Testing the Application

### Customer Flow:
1. Visit `http://localhost:3000`
2. Browse products
3. Click on product to see details
4. Add items to cart
5. Go to checkout
6. Fill shipping information
7. Place order
8. See order confirmation

### Admin Flow:
1. Visit `http://localhost:3000/admin`
2. Login with admin credentials
3. View dashboard statistics
4. Manage products (add/edit/delete)
5. View and update orders
6. Logout

##  Assumptions & Notes

1. **Session Storage**: Using express-session with MongoDB store for production-ready session management
2. **Tax Calculation**: Fixed 18% tax rate
3. **Stock Management**: Stock reduces on order placement
4. **Image Upload**: Single image per product, max 2MB, jpg/png only
5. **Pagination**: 12 products per page, 10 orders per page
6. **Order Status Flow**: New → Processing → Shipped → Delivered (or Cancelled)
7. **Payment**: Not implemented (future scope)

## Security Features

- Password hashing with bcryptjs
- Session-based authentication
- Protected admin routes
- Input validation
- File upload restrictions
- CORS configuration
- HTTP-only cookies

## Troubleshooting

### MongoDB Connection Issues:
```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Start MongoDB
sudo systemctl start mongod
```

### Clear Session Data:
Delete cookies from browser or use incognito mode

##  NPM Commands

### Backend:
- `npm install` - Install dependencies
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data

### Frontend:
- `npm install` - Install dependencies
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests


## 📄 License

MIT License

## 👨‍💻 Author

Aman Goswami

---

**Happy Coding! 🎉**
