import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

function connectDatabase() {
  mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.wwqghrw.mongodb.net/?retryWrites=true&w=majority`, {
    })
    .then(() => console.log("MongoDB Atlas Connected!"))
    .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
}

export default connectDatabase;