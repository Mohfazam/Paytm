"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExtrasRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.userExtrasRouter = express_1.default.Router();
const db_1 = require("../../Schema/UserSchema/db");
const AuthMiddleware_1 = require("../../middlewares/AuthMiddleware");
const zod_1 = __importDefault(require("zod"));
const updateBody = zod_1.default.object({
    password: zod_1.default.string().optional(),
    firstname: zod_1.default.string().max(50).optional(),
    lastname: zod_1.default.string().max(50).optional(),
});
exports.userExtrasRouter.put("/CredentialsUpdate", AuthMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        res.status(403).json({
            Message: "Something Went Wrong"
        });
        return;
    }
    console.log(req.body);
    yield db_1.User.findOneAndUpdate({ _id: req.userid }, req.body);
    res.status(201).json({
        Message: "Details Updated Successfully"
    });
}));
exports.userExtrasRouter.get("/bulk", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query.filter || "";
    const users = yield db_1.User.find({
        $or: [{
                firstName: {
                    "$regex": filter
                }
            }, {
                lastName: {
                    "$regex": filter
                }
            }]
    });
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
    });
}));
