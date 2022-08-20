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
const express_1 = require("express");
const user_service_1 = __importDefault(require("./user.service"));
const httpExceptions_1 = __importDefault(require("@/utils/exceptions/httpExceptions"));
const validation_middleware_1 = __importDefault(require("@/middleware/validation.middleware"));
const user_validation_1 = __importDefault(require("./user.validation"));
const authenticate_middleware_1 = __importDefault(require("@/middleware/authenticate.middleware"));
class UserController {
    constructor() {
        this.path = '/users';
        this.router = (0, express_1.Router)();
        this.userService = new user_service_1.default();
        this.signup = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, token } = yield this.userService.create(req.body);
                res.status(201).json({
                    status: 'success',
                    token,
                    user,
                });
            }
            catch (error) {
                next(new httpExceptions_1.default(error.message, error.statusCode));
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, token } = yield this.userService.login(req.body.email, req.body.password);
                res.status(200).json({
                    status: 'success',
                    token,
                    user,
                });
            }
            catch (error) {
                next(new httpExceptions_1.default(error.message, error.statusCode));
            }
        });
        this.getUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json({
                    status: 'success',
                    user: req.user
                });
            }
            catch (error) {
                next(new httpExceptions_1.default(error.message, error.statusCode));
            }
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.update(req.body, req.params.id);
                if (!user)
                    return next(new httpExceptions_1.default('user not found', 404));
                res.status(200).json({
                    status: 'success',
                    user
                });
            }
            catch (error) {
                next(new httpExceptions_1.default(error.message, error.statusCode));
            }
        });
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.post(`${this.path}/signup`, (0, validation_middleware_1.default)(user_validation_1.default.create), this.signup);
        this.router.post(`${this.path}/login`, (0, validation_middleware_1.default)(user_validation_1.default.login), this.login);
        this.router.route(`${this.path}`)
            .get(authenticate_middleware_1.default, this.getUser);
        this.router.route(`${this.path}/:id`)
            .patch(authenticate_middleware_1.default, this.updateUser);
    }
}
exports.default = UserController;
