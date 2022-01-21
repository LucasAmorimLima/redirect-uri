"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TokenSchema = new mongoose_1.Schema({
    token: String
}, {
    timestamps: false
});
exports.default = (0, mongoose_1.model)('token', TokenSchema);
