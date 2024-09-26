"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
// validateRequest(zodProductSchema.createZodProductSchema)
router.post('/', product_controller_1.productController.createAProduct);
router.get('/:id', product_controller_1.productController.findAProductById);
router.get('/', product_controller_1.productController.getAllProduct);
router.put('/:id', product_controller_1.productController.findAProductAndUpdate);
router.delete('/:id', product_controller_1.productController.deleteAProduct);
exports.productRoutes = router;
