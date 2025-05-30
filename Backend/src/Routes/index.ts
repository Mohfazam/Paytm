import express from "express";
import {userRouter} from "./UserRoute/index"

export const router = express.Router();


router.use("/user", userAuthRouter);