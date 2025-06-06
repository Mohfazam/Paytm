import express, { Request, Response } from "express";
import { authMiddleware } from "../../middlewares/AuthMiddleware";
import { Account } from "../../Schema/Bank Account Schema/db";
import mongoose from "mongoose";

export interface AuthenticatedRequest extends Request {
    userid?: string;
}

export const accountRouter = express.Router();

accountRouter.get("/Balance", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
    try {
        const balanceDoc = await Account.findOne({
            userid: req.userid
        });

        if (!balanceDoc) {
             res.status(404).json({
                Message: "Insufficient Funds or Invalid Credentials"
            });
        }

         res.status(200).json({
            Message: `The Balance of the user ${req.userid} is: ₹${balanceDoc!.balance.toFixed(2)}`
        });
    } catch (error) {
         res.status(500).json({
            Message: "Something went wrong",
            error: (error as Error).message
        });
    }
});

accountRouter.post("/Transfer", authMiddleware, async (req:AuthenticatedRequest, res) => {
    const session  = await mongoose.startSession();

    session.startTransaction();
    const {amount , to} = req.body;

    const account = await Account.findOne({userid: req.userid}).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            Message: "Insufficient Funds"
        });
    }

    const toAccount = Account.findOne({userid: to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        res.status(400).json({
            Message: "Invalid account"
        });
    }

    await Account.updateOne({userid: req.userid}, {$inc:{balance: -amount}}).session(session);
    await Account.updateOne({userid: to}, {$inc:{balance: amount}}).session(session);

    await session.commitTransaction();

    res.status(200).json({
        Message: "Transfer Successfull"
    });
});
