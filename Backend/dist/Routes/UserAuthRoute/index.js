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
exports.userAuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const v4_1 = require("zod/v4");
const db_1 = require("../../Schema/UserSchema/db");
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_2 = require("../../Schema/Bank Account Schema/db");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
exports.userAuthRouter = express_1.default.Router();
const UserInput = v4_1.z.object({
    username: v4_1.z.string().trim().lowercase(),
    password: v4_1.z.string().min(3),
    firstname: v4_1.z.string().max(50),
    lastname: v4_1.z.string().max(50)
});
exports.userAuthRouter.get("/Health", (req, res) => {
    res.status(200).json({
        msg: " User EndPoint is Running Up and Workind"
    });
});
exports.userAuthRouter.post("/Signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = UserInput.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            Message: "Incorrect Inputs"
        });
    }
    const existingUser = yield db_1.User.findOne({
        username: req.body.username
    });
    if (existingUser) {
        res.status(411).json({
            Message: "User already exists"
        });
    }
    const user = yield db_1.User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    const userid = user._id;
    yield db_2.Account.create({
        userid,
        balance: 1 + Math.random() * 1000
    });
    const token = jsonwebtoken_1.default.sign({ userid }, JWT_SECRET);
    res.status(201).json({
        Message: "User Signed Up Successfully",
        token: token
    });
}));
const signinBody = v4_1.z.object({
    username: v4_1.z.string().trim().email(),
    password: v4_1.z.string()
});
exports.userAuthRouter.post("/Signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            Message: "Invalid Inputs"
        });
        return;
    }
    const username = req.body.username;
    const password = req.body.password;
    const ExistingUser = yield db_1.User.findOne({
        username: username
    });
    if (!ExistingUser) {
        res.status(401).json({
            Message: 'User not found'
        });
        return;
    }
    // TODO: Add password checking here if you implement hashing
    const token = jsonwebtoken_1.default.sign({ userid: ExistingUser._id }, JWT_SECRET);
    res.status(201).json({
        Message: "User Logged In Successfully",
        Token: token
    });
    return;
}));
