import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDatabase from '../config/db.js';
import router from './routes/index.js';

const app = express();

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({credentials: true, origin: "http://localhost:5173"}))

app.use(express.json());
app.use(router);

export default app;