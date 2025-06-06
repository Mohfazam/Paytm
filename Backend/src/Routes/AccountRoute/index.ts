import express, { Request, Response } from "express";
import { authMiddleware } from "../../middlewares/AuthMiddleware";
import { Accountbalance } from "../../Schema/Bank Account Schema/db";

export interface AuthenticatedRequest extends Request {
    userid?: string;
}

export const accountRouter = express.Router();

accountRouter.get("/Balance", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
    try {
        const balanceDoc = await Accountbalance.findOne({
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
