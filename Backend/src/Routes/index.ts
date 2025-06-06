import express from "express";
import {userAuthRouter} from "./UserAuthRoute";
import { userExtrasRouter } from "./userUpdateRoute/userExtrasRoute";

export const MainRouter = express.Router();


MainRouter.use("/user", userAuthRouter);
MainRouter.use("/userExtras", userExtrasRouter);