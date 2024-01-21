const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


function connectDatabase() {
    mongoose
      .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.wwqghrw.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB Atlas Connected!"))
      .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
  }
  
  module.exports = connectDatabase;
