const userModel = require('../Model/UserModel.js');

const oppUsers = async (req, res) => {
  try {
    // Find users whose gender is not equal to req.user.gender
    const opp = await userModel.find({ gender: { $ne: req.user.gender } });

    // If no users are found, send a 400 response with a message
    if (!opp || opp.length === 0) {
      return res.status(400).json({ msg: "No users found" });
    }

    // Return the found users
    return res.status(201).json({ opp: opp });
  } catch (error) {
    // Handle any errors and send a 400 response with the error message
    return res.status(400).json({ error: error.message });
  }
};

const filteredData = async (req, res) => {
  try {
    const { gender, age, city, budget } = req.body;
    
    const filter = {};

    if (gender) filter.gender = gender;
    if (age) filter.age = age;
    if (city) filter.city = city;
    if (budget) filter.weddingBudget = budget;

    // Find users based on the filter
    const all = await userModel.find(filter);
    console.log(all)
    
    if (!all || all.length === 0) {
      return res.status(400).json({ msg: "No users found" });
    }

    return res.status(200).json({ all: all });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


module.exports = { oppUsers ,filteredData};
