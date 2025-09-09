const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true
  },
  planType: {
    type: String,
    enum: ['tenant', 'landlord', 'both'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  billingCycle: {
    type: String,
    enum: ['weekly', 'monthly', 'yearly', 'one-time'],
    required: true
  },
  description: String,
  features: [{
    featureKey: String,
    featureName: String,
    quota: Number,
    description: String
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);