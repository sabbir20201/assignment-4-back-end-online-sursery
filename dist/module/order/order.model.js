"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }, productQuantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    transactionId: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: false,
    },
    paymentStatus: {
        type: String,
        required: false,
    },
});
exports.Order = (0, mongoose_1.model)('Order', exports.OrderSchema);
