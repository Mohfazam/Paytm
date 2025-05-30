import Jwt from "jsonwebtoken";
import { Express } from "express";

const JWT_SECRET = process.env.JWT_SECRET;
//@ts-ignore
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({
            Message: "Access Forbidden"
        });
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = Jwt.verify(token, JWT_SECRET!);
//@ts-ignore

        req.userId = decoded.userId;

        next();
    } catch(erro){
        return res.status(403).json({
            Message: "Something Went Wrong"
        });
    }
}