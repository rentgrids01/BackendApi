const express = require('express');
const {
  registerTenant,
  registerOwner,
  loginTenant,
  loginOwner,
  logout,
  forgotPassword,
  sendOTP,
  verifyOTPController,
  registerValidation,
  loginValidation
} = require('../controllers/authController');
const validateRequest = require('../middleware/validation');

const router = express.Router();

// Tenant Auth Routes
router.post('/tenant/register', registerValidation, validateRequest, registerTenant);
router.post('/tenant/login', loginValidation, validateRequest, loginTenant);
router.post('/tenant/logout', logout);

// Owner Auth Routes
router.post('/owner/register', registerValidation, validateRequest, registerOwner);
router.post('/owner/login', loginValidation, validateRequest, loginOwner);
router.post('/owner/logout', logout);

// Common routes
router.patch('/forgot-password', forgotPassword);

// Email Verification Routes
router.post('/email/send-otp', sendOTP);
router.post('/email/verify-otp', verifyOTPController);

module.exports = router;