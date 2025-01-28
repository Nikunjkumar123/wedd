const UserModel = require("../Model/UserModel.js");

const blockByADMINForWork = async(req,res,next)=>{
    try {
        const useremail = req.user.email;
        const user = await UserModel.findOne({email:useremail});
        if(user.blockByADMIN == 'yes') return res.status(400).json({msg:"you are blocked by ADMIN"});
        else{
            next();
        }
    } catch (error) {
        return res.status(400).json({error:error});
    }
}
module.exports=blockByADMINForWork