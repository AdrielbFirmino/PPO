import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDatabase from './config/db.js';
import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import postRoute from './src/routes/post.route.js';
import swaggerRoute from './src/routes/swagger.route.js'

const port = process.env.PORT;

const app = express();

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({credentials: true, origin: "http://localhost:5173"}))

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/doc", swaggerRoute)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});