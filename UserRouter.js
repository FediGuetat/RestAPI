const express = require("express");
const router = express.Router();
const { getUsers, addUser, deleteUser, updateUser } = require("../controllers/userController");

router.get("/users", getUsers);
router.post("/add_user", addUser);
router.delete('/users/:id',deleteUser)
router.put('/users/:id',updateUser)

module.exports = router;