import mongoose from "mongoose";
import { User } from "../UserSchema/db";

const BankSchema = new mongoose.Schema({
    userid: {Type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    balance: {Type: Number, required: true}
});

export const  BankBalance = mongoose.model("bankbalance", BankSchema);