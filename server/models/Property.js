import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  area: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  features: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['available', 'sold', 'pending'],
    default: 'available'
  },
  images: [{
    url: String,
    public_id: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

export default Property;