const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductStatus
} = require('../controllers/productController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Public routes
router.get('/', getProducts);
router.get('/:id', getProduct);

// Protected routes (Admin only)
router.post('/', isAuthenticated, isAdmin, upload.single('image'), createProduct);
router.put('/:id', isAuthenticated, isAdmin, upload.single('image'), updateProduct);
router.delete('/:id', isAuthenticated, isAdmin, deleteProduct);
router.patch('/:id/status', isAuthenticated, isAdmin, updateProductStatus);

module.exports = router;
