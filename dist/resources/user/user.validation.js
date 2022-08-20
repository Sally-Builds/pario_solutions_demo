"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const create = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    otherNames: joi_1.default.string(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
    dob: joi_1.default.date(),
    gender: joi_1.default.string().required(),
});
const login = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
const update = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    otherNames: joi_1.default.string(),
    lastName: joi_1.default.string().required(),
    dob: joi_1.default.date(),
    gender: joi_1.default.string().required(),
});
exports.default = { create, login, update };
