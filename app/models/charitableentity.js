import mongoose from 'mongoose'
const Schema = mongoose.Schema

export default mongoose.model('CharitableEntity', new Schema({ 
  name: {
    type: String,
    default: '',
    required: 'Please fill name'
  },
  type: {
    type: String,
    default: '',
    required: 'Please fill type'
  },
  city: {
    type: String,
    default: '',
    required: 'Please fill city'
  },
  state: {
    type: String,
    default: '',
    required: 'Please fill state'
  },
  postaladdress: {
    type: String,
    default: '',
    required: 'Please fill postaladdress'
  },
  est_date: {
    type: Date, 
    required: 'Please fill established date'
  },
  email: {
    type: String,
    default: '',
    required: 'Please fill email',
    unique: true,
    trim: true
  },
  phone: {
    type: String,
    default: '',
    required: 'Please fill phone',
    trim: true
  },
  verified: {
    type: Boolean,
    default: false 
  },
  created: {
    type: Date,
    default: Date.now
  },
  createdByUserId: {
    type: String,
    required: 'Please fill the id of the user who is creating this'
  }
}))