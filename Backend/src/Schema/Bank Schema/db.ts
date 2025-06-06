import mongoose from "mongoose";

const AccountbalanceSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    balance: {type: Number, required: true}
});

export const  BankBalance = mongoose.model("Accountbalance", AccountbalanceSchema);