import mongoose from "mongoose";

export type TOrder ={
    name: string;
    email: string;
    phone: string;
    address: string;
    productQuantity: number;
    totalPrice: number;
    transactionId: String;
    status: string;
    paymentStatus: string;
} 
