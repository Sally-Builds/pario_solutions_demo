"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const token_1 = require("@/utils/token");
class UserService {
    constructor() {
        this.UserModel = user_model_1.default;
    }
    /**
     *
     * @param user - user data
     * @returns - newly created user
     */
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.UserModel.create(user);
                const token = (0, token_1.createToken)(newUser);
                return { token, user: newUser };
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    /**
     *
     * @param email - Users email address
     * @param password - users password
     * @returns access token and user details
     */
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.UserModel.findOne({ email: email });
                if (!user || !(yield user.comparePassword(password))) {
                    throw new Error('email or password is not valid');
                }
                const token = (0, token_1.createToken)(user);
                return { token, user };
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    /**
     *
     * @param data - user details to update
     * @param id - user id to update
     * @returns - updated user details
     */
    update(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.UserModel.findByIdAndUpdate(id, data, { runValidators: true, new: true });
                if (!user) {
                    throw new Error("No user found");
                }
                console.log(user);
                return user;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = UserService;
