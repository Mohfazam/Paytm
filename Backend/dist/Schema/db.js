"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL;
mongoose_1.default.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
});
const userSchema = new mongoose_1.default.Schema({
    username: { required: true, type: String, unique: true, trim: true, lowercase: true, minLength: 3, maxLength: 30 },
    password: { required: true, type: String, minLength: 3 },
    firstname: { required: true, type: String, trim: true, maxLength: 50 },
    lastname: { required: true, type: String, trim: true, maxLength: 50 },
});
exports.User = mongoose_1.default.model("User", userSchema);
// export User;
