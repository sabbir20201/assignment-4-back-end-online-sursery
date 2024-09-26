"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodProductSchema = void 0;
const zod_1 = require("zod");
const createZodProductSchema = (0, zod_1.object)({
    image: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    rating: zod_1.z.number(),
    category: zod_1.z.string(),
});
exports.zodProductSchema = {
    createZodProductSchema
};
