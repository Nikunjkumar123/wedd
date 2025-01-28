const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  fatherName:{
    type:String,
  },
  motherName:{
    type:String,
  },
  grandfatherName:{
    type:String,
  },
  height:{
    type:String,
  },
  dateOfBirth:{
    type:String,
  },
  maritialStatus:{
    type:String,
    enum:['single','divorced','widow'],
  },
  familyHead:{
    type:String,
    enum:['father','mother','brother','sister','grandfather','grandmother','uncle'],
  },
  familyOccupationHead:{
    type:String,
  },
  numberOfBrother:{
    type:String,
  },
  NumOfSister:{
    type:String,
  },
  Belong :{
    type:String,
  },
  education:{
    type:String,
  },
  working:{
    type:String,
  },
  annualIncome:{
    type:String,
  },
  house :{
    type:String,
    enum:['rental','owned'],
  },
  password: {
    type: String,
  },
  image:{
    type:String,
  },
  phone:{
    type:String,
  },
  email: {
    type: String,
    unique: true,
  },
  area :{
    type:String,
  },
  city :{
    type:String,
  },
  state :{
    type:String,
  },
  pincode :{
    type:String,
  },
  country:{
    type:String,
  },  
  weddingBudget:{
    type:Number,
  },
  weddingStyle:{
    type:String,
    enum:['sunnati','traditional','expensive'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  myToken:{
    type:Number,
    default:'',
  },
  paymentDone:{
    type:Boolean,
    default:0,
  },
  blockByADMIN:{
    type:String,
    default:"no",
  },
  Verified:{
    type:String,
    default:"no",
  },
  connections:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }]
});

UserSchema.pre('save', async function (next) {
    // if (!this.isModified('password')) {
    //   return next();
    // }
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error); 
    }
  });
UserSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (err) {
        throw new Error('Error comparing passwords'); 
    }
};  
UserSchema.methods.createToken = function(){
    const token =  jwt.sign({userId:this._id,email:this.email,role:this.role,name:this.name},process.env.SECRCET,{expiresIn:process.env.Expires})
    return token;
}

module.exports = mongoose.model('User',UserSchema);