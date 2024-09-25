import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
    image: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    category: {
        type:String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false
    }
}) 

export const Product = model<TProduct>('Product', productSchema)