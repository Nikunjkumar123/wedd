const contactModel = require('../Model/contactModel.js')
const addEnq = async(req,res)=>{
    try {
        const {name,email,contact,message} = req.body;
        const all = await contactModel.create(req.body);
        res.status(200).json({msg:"Enquiry added"});
    } catch (error) {
        return res.status(400).json({error:error});
    }
}
const AllEnq = async(req,res)=>{
    try {
        const all = await contactModel.find();
        if(!all) return res.status(400).json({msg:"no enquiry found"});
        return res.status(200).json({msg:all});
    } catch (error) {
        return res.status(400).json({error:error});
    }
}

module.exports={addEnq,AllEnq}