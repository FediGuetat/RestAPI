const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const userRouter = require("./routes/userRouter");


app.use(express.json());
app.use("/api", userRouter);


const User = require("./models/User");


require("dotenv").config({ path: "./config/.env" });


connectDB();


 
 app.post("/api/add_user", async (req, res) => {
console.log(req.body)
 res.send('hello')
   const { name, lastName, email, phone } = req.body;
   try {
     const newUser = new User({ name, lastName, email, phone });
     await newUser.save();
     res.send(newUser);
   } catch (error) {
     console.log(error.message);
     res.status(500).json({ msg: error.message });
   }
 });

 app.get("/api/", async (req, res) => {
  try {
     const users = await User.find();
     res.send(users);
   } catch (error) {
     res.status(500).json({ msg: error.message });
   }
});

 app.get("/api/users/:id", async (req, res) => {
   const userID = req.params.id;
  try {
     const User = await User.findById(userID);
    res.send(User);
  } catch (error) {
    res.status(500).json({ msg: error.message });}


app.delete("/api/users/:id", async (req, res) => {
const userID = req.params.id;
   try {
     const userRemoved = await User.findByIdAndDelete(userID);
     res.send(userRemoved);
   } catch (error) {
     res.status(500).json({ msg: error.message });
   }
 });

 app.put("/api/users/:id", async (req, res) => {
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
 });


const PORT = 5000;
app.listen(PORT, (err) =>
  err
    ? console.error(error)
    : console.log(`the server is running on port ${PORT}`)
)})