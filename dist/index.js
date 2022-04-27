"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeMiddleware_1 = __importDefault(require("./middleware/resizeMiddleware"));
const app = (0, express_1.default)();
const port = 8000;
app.get('/api/images', resizeMiddleware_1.default, (req, res) => {
    //send status equal 200
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
