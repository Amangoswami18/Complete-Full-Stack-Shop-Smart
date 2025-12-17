require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

// Sample product data with Unsplash images
const sampleProducts = [
  // Electronics
  {
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ergonomic design for all-day comfort. Perfect for music lovers and professionals alike.",
    price: 12999,
    stock: 25,
    category: "Electronics",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
  },
  {
    name: "Smart Watch Pro",
    description: "Stay connected and healthy with our latest smart watch. Track your fitness goals, receive notifications, monitor heart rate, and control your music. Water-resistant with 7-day battery life.",
    price: 24999,
    stock: 18,
    category: "Electronics",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360° sound. Waterproof design makes it perfect for outdoor adventures. 12-hour playtime and deep bass for an immersive audio experience.",
    price: 4999,
    stock: 42,
    category: "Electronics",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
  },
  
  // Fashion
  {
    name: "Classic Denim Jacket",
    description: "Timeless denim jacket made from premium quality fabric. Features multiple pockets, button closure, and a comfortable fit. A wardrobe essential that never goes out of style.",
    price: 3499,
    stock: 30,
    category: "Fashion",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
  },
  {
    name: "Designer Sunglasses",
    description: "Protect your eyes in style with these trendy designer sunglasses. UV400 protection, polarized lenses, and durable frame. Available in multiple colors.",
    price: 1999,
    stock: 55,
    category: "Fashion",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80"
  },
  {
    name: "Leather Backpack",
    description: "Premium genuine leather backpack with multiple compartments. Laptop sleeve fits up to 15.6 inches. Perfect for work, travel, or casual outings. Water-resistant and durable.",
    price: 5999,
    stock: 20,
    category: "Fashion",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
  },
  {
    name: "Running Shoes",
    description: "Lightweight running shoes with superior cushioning and breathable mesh upper. Designed for maximum comfort and performance. Perfect for your daily runs and workouts.",
    price: 4499,
    stock: 35,
    category: "Fashion",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
  },
  
  // Home & Living
  {
    name: "Ceramic Coffee Mug Set",
    description: "Elegant set of 4 handcrafted ceramic coffee mugs. Microwave and dishwasher safe. Perfect for your morning coffee or tea. Beautiful design that complements any kitchen.",
    price: 1299,
    stock: 60,
    category: "Home & Living",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80"
  },
  {
    name: "Aromatherapy Diffuser",
    description: "Create a relaxing atmosphere with our ultrasonic aromatherapy diffuser. Features LED lights, auto shut-off, and whisper-quiet operation. Includes essential oils starter pack.",
    price: 2499,
    stock: 28,
    category: "Home & Living",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80"
  },
  {
    name: "Premium Yoga Mat",
    description: "Non-slip yoga mat made from eco-friendly materials. Extra thick for superior cushioning. Perfect for yoga, pilates, and home workouts. Comes with carrying strap.",
    price: 1799,
    stock: 45,
    category: "Home & Living",
    status: "Active",
    imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80"
  }
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...\n');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    console.log('✅ Existing data cleared\n');

    // Create admin user
    console.log('👤 Creating admin user...');
    const admin = await User.create({
      email: 'admin@retailstore.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('✅ Admin user created');
    console.log('   Email: admin@retailstore.com');
    console.log('   Password: admin123\n');

    // Create products
    console.log('📦 Creating products...');
    const products = await Product.insertMany(sampleProducts);
    console.log(`✅ ${products.length} products created\n`);

    // Display product summary
    console.log('📊 Product Summary:');
    const categories = {};
    products.forEach(product => {
      if (!categories[product.category]) {
        categories[product.category] = 0;
      }
      categories[product.category]++;
    });
    
    Object.keys(categories).forEach(category => {
      console.log(`   ${category}: ${categories[category]} products`);
    });

    console.log('\n✨ Database seeding completed successfully!\n');
    console.log('🚀 You can now start the server with: npm run dev\n');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('👋 Database connection closed');
    process.exit(0);
  }
};

// Run seeding
connectDB().then(() => {
  seedDatabase();
});
