const mongoose = require("mongoose");
const User = require("./profileModel");
const multer = require("multer");
const upload = multer({storage})


exports.SignUp = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    const user = await User.create({ userName, password });

    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating user", details: error.message });
  }
};

exports.Login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    res.status(500).json({ error: "Error logging in", details: error.message });
  }
};

exports.BalancedCheck = async(req, res)=>{

}
exports.FileUpload = async (req, res) => {
    const file = req.body;

};
exports.ProfileDataStorage = async(req, res)=>{
    ///it could accept data in json 
    /// store that data in the atlas db
}
