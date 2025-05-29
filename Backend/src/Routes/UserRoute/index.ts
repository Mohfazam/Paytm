import express from 'express';
import {z} from 'zod/v4';

export const userRouter = express.Router();

userRouter.get("/Health", (req, res) => {

    const UserInput = z.object({
        username: z.string().trim().lowercase(),
        password: z.string().min(3),
        firstname: z.string().max(50),
        lastname: z.string().max(50)

    })

    res.status(200).json({
        msg: " User EndPoint is Running Up and Workind"
    });
});


userRouter.post("/Signup", (req, res) => {
    const {username, password, firstname, lastname} = req.body;
});