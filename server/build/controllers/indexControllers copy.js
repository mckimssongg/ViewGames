"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class indexControllers {
    index(req, res) {
        res.send('Hello World!');
    }
}
exports.indexController = new indexControllers();
