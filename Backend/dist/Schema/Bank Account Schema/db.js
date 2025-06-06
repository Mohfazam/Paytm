"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AccountbalanceSchema = new mongoose_1.default.Schema({
    userid: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: "User" },
    balance: { type: Number, required: true }
});
exports.Account = mongoose_1.default.model("Accountbalance", AccountbalanceSchema);
