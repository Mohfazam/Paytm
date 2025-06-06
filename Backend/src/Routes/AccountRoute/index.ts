import express from "express";
import { authMiddleware } from "../../middlewares/AuthMiddleware";
import { Accountbalance } from "../../Schema/Bank Account Schema/db";

import { Request } from "express";

export interface AuthenticatedRequest extends Request {
    userid?: string;
}

export const accountRouter  = express.Router();

accountRouter.get("/Balance", authMiddleware, (req:AuthenticatedRequest, res) => {

    

    const balance = Accountbalance.findOne({
        userid:req.userid
    });

    if(!balance){
        res.status(404).json({
            Message: "Insufficint Funds or invalid Credentials"
        })
    };

    res.status(201).json({
        Message: `The Balance of the user ${req.userid} is: ${balance}`
    })
});