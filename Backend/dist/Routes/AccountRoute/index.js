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
exports.accountRouter = express_1.default.Router();
exports.accountRouter.get("/Balance", AuthMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const balanceDoc = yield db_1.Accountbalance.findOne({
            userid: req.userid
        });
        if (!balanceDoc) {
            res.status(404).json({
                Message: "Insufficient Funds or Invalid Credentials"
            });
        }
        res.status(200).json({
            Message: `The Balance of the user ${req.userid} is: ₹${balanceDoc.balance.toFixed(2)}`
        });
    }
    catch (error) {
        res.status(500).json({
            Message: "Something went wrong",
            error: error.message
        });
    }
}));
