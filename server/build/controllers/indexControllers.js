"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class indexControllers {
    index(req, res) {
        res.json({ text: 'API is /api/' });
    }
}
exports.indexController = new indexControllers();
