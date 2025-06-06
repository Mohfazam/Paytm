import express from 'express';
import mongoose from 'mongoose';
import {jwt, z} from 'zod/v4';
import { User } from '../../Schema/UserSchema/db';
import dotenv from "dotenv"
import  Jwt  from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

export const userAuthRouter = express.Router();

const UserInput = z.object({
        username: z.string().trim().lowercase(),
        password: z.string().min(3),
        firstname: z.string().max(50),
        lastname: z.string().max(50)

    })

userAuthRouter.get("/Health", (req, res) => {
    res.status(200).json({
        msg: " User EndPoint is Running Up and Workind"
    });
});


userAuthRouter.post("/Signup", async (req, res) => {
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

const signinBody = z.object({
    username: z.string().trim().email(),
    password: z.string()
})

userAuthRouter.post("/Signin", async(req, res) => {

    const {success} = signinBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            Message: "Invalid Inputs"
        })
    }

    const username = req.body.username;
    const password = req.body.password;

    const ExistingUser = await User.findOne({
        username: username
    });

    if(!ExistingUser){
        res.status(401).json({
            Message: 'User not found'
        });
    }

    const token = Jwt.sign({
            userid: ExistingUser!._id  
        }, JWT_SECRET);

    res.status(201).json({
        Message: "User Logged In Successfully",
        Token: token
    });
});

