const userModel = require("../Model/UserModel.js");

// Get Profile
const myProfile = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ message: user });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error in getting profile", error: error.message });
  }
};

// Update Profile
const updateMyProfile = async (req, res) => {
    try {
      let image;
      
      if (req.files && req.files.image) {
        const result = await cloudinary.uploader.upload(
          req.files.image.tempFilePath,
          {
            use_filename: true,
            folder: "file-upload",
          }
        );
        fs.unlinkSync(req.files.image.tempFilePath);
        image = result.secure_url; // Uploaded image URL
      }
  
      // Prepare update data
      const updateData = { ...req.body };
      if (image) updateData.image = image; // Add image to update data if available
  
      const user = await userModel.findOneAndUpdate(
        { email: req.user.email },
        updateData,
        { new: true, runValidators: true }
      );
  
      if (!user) {
        return res.status(404).json({ msg: "User not found for update" });
      }
  
      res.status(200).json({ msg: "Profile updated", data: user });
  
    } catch (error) {
      res.status(400).json({ msg: "Error in updating profile", error: error.message });
    }
  };
  

module.exports = { myProfile, updateMyProfile };
