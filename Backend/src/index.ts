import express from "express";
import {User} from './Schema/db'
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { router as MainRouter } from './Routes/index'
import  Mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const MONGO_URL = process.env.MONGO_URL!;


const app = express();
app.use(cors());

app.use(express.json());

Mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
})


app.use("/api/v1", MainRouter);

app.listen(3000, () => {
    console.log("Server Started on PORT 3000");
});

