import mongoose from "mongoose";

const AccountbalanceSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    balance: {type: Number, required: true}
});

export const  Accountbalance = mongoose.model("Accountbalance", AccountbalanceSchema);