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
exports.accountRouter = void 0;
const express_1 = __importDefault(require("express"));
const AuthMiddleware_1 = require("../../middlewares/AuthMiddleware");
const db_1 = require("../../Schema/Bank Account Schema/db");
const mongoose_1 = __importDefault(require("mongoose"));
exports.accountRouter = express_1.default.Router();
exports.accountRouter.get("/Balance", AuthMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const balanceDoc = yield db_1.Account.findOne({
            userid: req.userid
        });
        if (!balanceDoc) {
            res.status(404).json({
                Message: "Insufficient Funds or Invalid Credentials"
            });
        }
        res.status(200).json({
            Message: `The Balance of the user ${req.userid} is: ₹${balanceDoc.balance.toFixed(2)}`,
            Balance: balanceDoc.balance
        });
    }
    catch (error) {
        res.status(500).json({
            Message: "Something went wrong",
            error: error.message
        });
    }
}));
exports.accountRouter.post("/Transfer", AuthMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const { amount, to } = req.body;
        const account = yield db_1.Account.findOne({ userid: req.userid }).session(session);
        if (!account || account.balance < amount) {
            yield session.abortTransaction();
            res.status(400).json({
                Message: "Insufficient Funds"
            });
        }
        const toAccount = db_1.Account.findOne({ userid: to }).session(session);
        if (!toAccount) {
            yield session.abortTransaction();
            res.status(400).json({
                Message: "Invalid account"
            });
        }
        yield db_1.Account.updateOne({ userid: req.userid }, { $inc: { balance: -amount } }).session(session);
        yield db_1.Account.updateOne({ userid: to }, { $inc: { balance: amount } }).session(session);
        yield session.commitTransaction();
        res.status(200).json({
            Message: "Transfer Successfull"
        });
    }
    catch (error) {
        res.status(404).json({
            Message: "Something Went Wrong"
        });
    }
}));
