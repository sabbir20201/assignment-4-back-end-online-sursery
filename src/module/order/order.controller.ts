import { Request, Response } from "express";
import { createAOrderInToBD } from "./order.services";

const createOrder = async(req: Request, res:Response)=>{
 try {
    const orderData = req.body;
   
    const result = await createAOrderInToBD(orderData)
    console.log(result);
    
   return res.status(200).json({
        success: true,
        message: "order created successfully",
        data: result
    })
 } catch (error) {
    console.log(error);
    
 }
}

export const OrderController = {
    createOrder
}