"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class gamesControllers {
    index(req, res) {
        database_1.default.query('DESCRIBE games');
        res.json({ text: 'API is /api/games' });
    }
    create(req, res) {
        res.json({ message: 'Game Saved' });
    }
}
const gamesController = new gamesControllers();
exports.default = gamesController;
