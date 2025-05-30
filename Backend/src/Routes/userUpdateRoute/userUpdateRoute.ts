import  express  from "express";
export const userUpdateRouter = express.Router();
import { User } from "../../Schema/db";
import { authMiddleware } from "../../middlewares/AuthMiddleware";
import z from "zod";

const updateBody = z.object({
    password: z.string().optional(),
    firstname: z.string().max(50).optional(),
    lastname: z.string().max(50).optional(),
})


userUpdateRouter.put("/Credentials", authMiddleware, async (req, res) => {
    const {success} = updateBody.safeParse(req.body);

    if(!success){
    res.status(403).json({
            Message: "Something Went Wrong"
        });
        return;
    }
    console.log(req.body);
    await User.findOneAndUpdate({_id: (req as any).userid}, req.body);

    res.status(201).json({
        Message: "Details Updated Successfully"
    })
    
});