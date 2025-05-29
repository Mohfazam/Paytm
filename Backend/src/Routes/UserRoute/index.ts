import express from 'express';
import mongoose from 'mongoose';
import {z} from 'zod/v4';
import { User } from '../../Schema/db';
import dotenv from "dotenv"
import  Jwt  from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

export const userRouter = express.Router();

const UserInput = z.object({
        username: z.string().trim().lowercase(),
        password: z.string().min(3),
        firstname: z.string().max(50),
        lastname: z.string().max(50)

    })

userRouter.get("/Health", (req, res) => {
    res.status(200).json({
        msg: " User EndPoint is Running Up and Workind"
    });
});


userRouter.post("/Signup", async (req, res) => {
    const {success} = UserInput.safeParse(req.body);

    if(!success){
        res.status(411).json({
            Message: "Incorrect Inputs"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if(existingUser){
        res.status(411).json({
            Message: "User already exists"
        });
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    const userid = user._id;

    const token = Jwt.sign({userid}, JWT_SECRET);

    res.status(201).json({
        Message: "User Signed Up Successfully",
        token: token
    });
});