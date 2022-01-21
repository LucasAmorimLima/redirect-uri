"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var token_1 = __importDefault(require("./token"));
;
var App = /** @class */ (function () {
    function App() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.database();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
    };
    App.prototype.routes = function () {
        this.express.use(token_1.default);
    };
    App.prototype.database = function () {
        mongoose_1.default.connect('mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/tindindb?retryWrites=true&w=majority');
    };
    return App;
}());
exports.default = new App().express;
