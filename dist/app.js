"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./module/product/product.routes");
const NotFound_1 = require("./middleware/NotFound");
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const order_routes_1 = require("./module/order/order.routes");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/product', product_routes_1.productRoutes);
app.use('/api/checkout', order_routes_1.orderRoutes);
// app.use('/')
app.use(globalErrorHandler_1.globalErrorHandler);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(NotFound_1.notFound);
exports.default = app;
