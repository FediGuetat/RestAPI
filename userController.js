const User = require("../models/Contact");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const addUser = async (req, res) => {
  const { name, lastName, email, phone } = req.body;
  try {
    const newUser = new User({ name, lastName, email, phone });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteUser = async (req, res) => {
  const userID = req.params.id;
  try {
    const userRemoved = await User.findByIdAndDelete(userID);
    res.status(201).json(userRemoved);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateUser = async (req, res) => {
  const userID = req.params.id;
  try {
    const userUpdated = await User.findByIdAndUpdate(
      userID,
      { ...req.body },
      { new: true }
    );
    res.status(201).json(userUpdated);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getUsers, addUser, deleteUser, updateUser };