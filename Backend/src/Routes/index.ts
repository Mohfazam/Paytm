import express from "express";
import {userAuthRouter} from "./UserAuthRoute";
import { userUpdateRouter } from "./userUpdateRoute/userUpdateRoute";

export const router = express.Router();


router.use("/user", userAuthRouter);
router.use("/userUpdate", userUpdateRouter);