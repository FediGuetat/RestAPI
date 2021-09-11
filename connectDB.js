const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("the DB is connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDB;

 mongoose
     .connect("mongodb://localhost:27017/Users", {
       useNewUrlParser: true,
      useUnifiedTopology: true,
     })
    .then(console.log("the DB is connected"))
    .catch((err) => console.error(err));