import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

export const OrderSchema = new Schema<TOrder>({
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


})

export const Order = model<TOrder>('Order', OrderSchema);