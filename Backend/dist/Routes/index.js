"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserAuthRoute_1 = require("./UserAuthRoute");
const userExtrasRoute_1 = require("./userUpdateRoute/userExtrasRoute");
const index_1 = require("./AccountRoute/index");
exports.MainRouter = express_1.default.Router();
exports.MainRouter.use("/user", UserAuthRoute_1.userAuthRouter);
exports.MainRouter.use("/userExtras", userExtrasRoute_1.userExtrasRouter);
exports.MainRouter.use("/Account", index_1.accountRouter);
