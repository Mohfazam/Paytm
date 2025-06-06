import mongoose from "mongoose";

const BankSchema = new mongoose.Schema({
    userid: mongoose.Schema.Types.ObjectId,
    balance: Number
});

export const  BankBalance = mongoose.model("bankbalance", BankSchema);