const mongoose = require("mongoose");

module.exports.connectDB = () => {
  mongoose
    .connect("mongodb+srv://deeptadhani6:NpAj1xKTcCz35cPA@cluster0.cyqes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};
