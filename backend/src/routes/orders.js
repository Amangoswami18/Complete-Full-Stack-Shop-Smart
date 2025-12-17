const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrder,
  updateOrderStatus,
  getDashboardStats
} = require('../controllers/orderController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// Public routes
router.post('/', createOrder);

// Protected routes (Admin only)
router.get('/', isAuthenticated, isAdmin, getOrders);
router.get('/dashboard/stats', isAuthenticated, isAdmin, getDashboardStats);
router.get('/:id', isAuthenticated, isAdmin, getOrder);
router.patch('/:id/status', isAuthenticated, isAdmin, updateOrderStatus);

module.exports = router;
