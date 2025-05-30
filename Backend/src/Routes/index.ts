import express from "express";
import {userAuthRouter} from "./UserAuthRoute";
import { userExtrasRouter } from "./userUpdateRoute/userExtrasRoute";

export const router = express.Router();


router.use("/user", userAuthRouter);
router.use("/userUpdate", userExtrasRouter);