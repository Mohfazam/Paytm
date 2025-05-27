import express from 'express';

export const userRouter = express.Router();

userRouter.get("/user", (req, res) => {
    res.status(200).json({
        msg: "WORKED"
    });
});

