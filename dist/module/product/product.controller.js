"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const createAProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // zodProductSchema.parse({body:productData})
        const result = yield product_service_1.ProductServices.createAProductInToDB(productData);
        res.json({
            success: true,
            statusCode: 200,
            message: "product created successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
const findAProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield product_service_1.ProductServices.findAProductByIdFromDB(id);
        res.json({
            success: true,
            statusCode: 200,
            message: "a single product got successfully",
            data: result
        });
    }
    catch (error) {
        next();
    }
});
const findAProductAndUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        console.log("updatedData", updatedData, "id", id);
        const result = yield product_service_1.ProductServices.findAProductByIdAndUpdate(id, updatedData);
        res.json({
            success: true,
            statusCode: 200,
            message: "a single product updated successfully",
            data: result
        });
    }
    catch (error) {
        next();
    }
});
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductFromDB();
        res.json({
            success: true,
            statusCode: 200,
            message: "get all product successfully",
            data: result
        });
    }
    catch (error) {
        next();
    }
});
const deleteAProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        const result = yield product_service_1.ProductServices.deleteAProductFromDB(id);
        // if(!result){
        //     res.json({
        //         success: true,
        //         statusCode: 500,
        //         message: " product not found successfully",
        //         data: result
        //     })
        // }
        res.json({
            success: true,
            statusCode: 200,
            message: "deleted a product successfully",
            data: result
        });
    }
    catch (error) {
        next();
    }
});
exports.productController = {
    createAProduct,
    getAllProduct,
    findAProductById,
    deleteAProduct,
    findAProductAndUpdate
};
