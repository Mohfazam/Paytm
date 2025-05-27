"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { required: true, type: String, unique: true, trim: true, lowercase: true, minLength: 3, maxLength: 30 },
    password: { required: true, type: String, minLength: 3 },
    firstname: { required: true, type: String, trim: true, maxLength: 50 },
    lastname: { required: true, type: String, trim: true, maxLength: 50 },
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
