"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = __importDefault(require("../controllers/gamesControllers"));
class gamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', gamesControllers_1.default.index);
        this.router.post('/', gamesControllers_1.default.create);
    }
}
exports.default = new gamesRoutes().router;
