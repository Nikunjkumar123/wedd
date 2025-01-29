const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  grandfatherName: {
    type: String,
  },
  height: {
    type: String,
  },
  dob: {
    type: String,
  },
  maritalstatus: {
    type: String,
    // enum:['Single','Divorced','Widow'],
  },
  FamilyHead: {
    type: String,
    // enum:['father','mother','brother','sister','grandfather','grandmother','uncle'],
  },
  FamilyHeadOccupation: {
    type: String,
  },
  siblings: {
    type: String,
  },
  Sistersiblings: {
    type: String,
  },
  pehchan: {
    type: String,
  },
  education: {
    type: String,
  },
  working: {
    type: String,
  },
  annualIncome: {
    type: String,
  },
  house: {
    type: String,
    // enum:['rental','owned'],
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
  },
  area: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pin: {
    type: String,
  },
  country: {
    type: String,
  },
  weddingBudget: {
    type: Number,
  },
  weddingStyle: {
    type: String,
    // enum:['sunnati','traditional','expensive'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  myToken: {
    type: String,
    default: '',
  },
  paymentDone: {
    type: Boolean,
    default: false,
  },
  blockByADMIN: {
    type: String,
    default: 'no',
  },
  Verified: {
    type: String,
    default: 'no',
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error('Error comparing passwords');
  }
};

UserSchema.methods.createToken = function () {
  const token = jwt.sign({ userId: this._id, email: this.email, role: this.role, name: this.fullName ,gender:this.gender}, process.env.SECRCET, { expiresIn: process.env.Expires });
  return token;
};

module.exports = mongoose.model('User', UserSchema);
