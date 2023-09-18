const mongoose = require("mongoose");

const dbConnect = () => {
  const connectionParams = { useNewUrlParser: true };
  mongoose.connect(process.env.DB, connectionParams);

  mongoose.connection.on("connected", () => {
    console.log("connected to DB successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error while connecting to database:" + err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB connection disconnected");
  });
};

module.exports = dbConnect;
