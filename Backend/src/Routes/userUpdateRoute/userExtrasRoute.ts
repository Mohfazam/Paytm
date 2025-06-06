import  express  from "express";
export const userExtrasRouter = express.Router();
import { User } from "../../UserSchema/db";
import { authMiddleware } from "../../middlewares/AuthMiddleware";
import z from "zod";

const updateBody = z.object({
    password: z.string().optional(),
    firstname: z.string().max(50).optional(),
    lastname: z.string().max(50).optional(),
})


userExtrasRouter.put("/CredentialsUpdate", authMiddleware, async (req, res) => {
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

userExtrasRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
    })
})