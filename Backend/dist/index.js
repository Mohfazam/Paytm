"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./Routes/index");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
});
app.use("/api/v1", index_1.MainRouter);
app.listen(3000, () => {
    console.log("Server Started on PORT 3000");
});
