const userModel = require('../Model/UserModel.js');
const cloudinary = require('cloudinary').v2
const fs = require('fs');

const allUsers = async(req,res)=>{
    try {
        const allUser = await userModel.find();
        if(!allUser) return res.status(400).json({error:error});
        return res.status(200).json(allUser);
    } catch (error) {
        return res.status(400).json({error:error});
    }
}

const addUser = async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
            use_filename:true,folder:'file-upload',
        })
        fs.unlinkSync(req.files.image.tempFilePath);
        const image = result.secure_url;
        const {name,email,password,age,gender,fatherName,motherName,dateOfBirth,grandfatherName,occupation,familyOccupationHead,height,Belong,NumOfSibling,siblingMarriedStatus,education,working,annualIncome,phone,house,city,state,address,pin,partnerGender,weddingBudget,weddingStyle,role}=req.body;
        if(!name||!email||!password||!age||!gender||!fatherName||!motherName||!dateOfBirth||!grandfatherName||!occupation||!familyOccupationHead||!height||!Belong||!NumOfSibling||!siblingMarriedStatus||!education||!working||!annualIncome||!phone||!house||!city||!state||!address||!pin||!partnerGender||!weddingBudget||!weddingStyle||!role ||!image){
            res.json({msg:'enter all fields'});
        }
        const user=await userModel.create({name,email,password,age,gender,fatherName,motherName,dateOfBirth,grandfatherName,occupation,familyOccupationHead,height,Belong,NumOfSibling,siblingMarriedStatus,education,working,annualIncome,phone,house,city,state,address,pin,partnerGender,weddingBudget,weddingStyle,role,image});
        res.json({user}); 
            
    } catch (error) {
        return res.status(500).json({ msg: 'Cloudinary upload and register failed', error });
    }
}

const updateUser = async(req,res)=>{
    try {
        const usrID = req.params.id;
        const user = await userModel.findByIdAndUpdate(
            { _id: usrID },
            req.body,
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ msg: 'User not found for update' });
        }
        res.status(200).json({ msg: 'Profile updated', data: user });
    } catch (error) {
        res.status(400).json({ msg: 'Error in updating profile', error: error.message });
    }
}
const deleteUser = async(req,res)=>{
    try {
        const usrId = req.params.id;
        const usercheck=await userModel.findByIdAndDelete({_id:usrId});
        if(!usercheck) return res.status(400).json({msg:"user not availabel"});
    } catch (error) {
        res.status(400).json({ msg: 'Error in deleting profile', error: error.message });
    }
}

const normaluser = async(req,res)=>{
    try {
        const normaluser = await userModel.find({paymentDone:0})
        if(!normaluser) return res.status(400).json({msg:'NO non payment users'});
        return res.status(200).json({user:normaluser});
    } catch (error) {
        return res.status(400).json({error:error});
    }
}
const premiumuser = async(req,res)=>{
    try {
        const normaluser = await userModel.find({paymentDone:1})
        if(!normaluser) return res.status(400).json({msg:'NO non payment users'});
        return res.status(200).json({user:normaluser});
    } catch (error) {
        return res.status(400).json({error:error});
    }
}

const blockUserByAdmin = async(req,res)=>{
    try {
        const usrid = req.params.id;
        const user = await userModel.findByIdAndUpdate(
            usrid,
            { blockByADMIN: "yes" },
            { new: true, runValidators: true }
        ); 
        if (!user) return res.status(400).json({ msg: 'User not found with that ID' });
        res.status(200).json({msg:"user blocked"});
    } catch (error) {
        return res.status(400).json({error:error});
    }
}


module.exports = {allUsers,addUser,updateUser,deleteUser,normaluser,premiumuser,blockUserByAdmin};