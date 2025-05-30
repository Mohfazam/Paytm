import express from "express";
import {userAuthRouter} from "./UserRoute/index"

export const router = express.Router();


router.use("/user", userAuthRouter);