import { NextFunction, Request, Response } from "express";
import { ProductServices } from "./product.service";
import { object, symbol, z } from "zod";
import AppError from "../../error/AppError";



const createAProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = req.body;
        // zodProductSchema.parse({body:productData})
        const result = await ProductServices.createAProductInToDB(productData)
       
        res.json({
            success: true,
            statusCode: 200,
            message: "product created successfully",
            data: result
        })
    } catch (error) {
        next(error)
        console.log(error);

    }
}
const findAProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await ProductServices.findAProductByIdFromDB(id)
        res.json({
            success: true,
            statusCode: 200,
            message: "a single product got successfully",
            data: result
        })
    } catch (error) {
        next()
    }
}
const findAProductAndUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const updatedData = req.body;
        console.log("updatedData", updatedData, "id",id);
        
        const result = await ProductServices.findAProductByIdAndUpdate(id,updatedData)
        res.json({
            success: true,
            statusCode: 200,
            message: "a single product updated successfully",
            data: result
        })
    } catch (error) {
        next()
    }
}

const getAllProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProductServices.getAllProductFromDB();
        res.json({
            success: true,
            statusCode: 200,
            message: "get all product successfully",
            data: result
        })
    } catch (error) {
        next()
    }
}

const deleteAProduct = async (req: Request, res: Response, next: NextFunction) => {
try {
    const id = req.params.id;
    console.log(id);
    
    const result = await ProductServices.deleteAProductFromDB(id)
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
    })
} catch (error) {
    next()
}
}
export const productController = {
    createAProduct,
    getAllProduct,
    findAProductById,
    deleteAProduct,
    findAProductAndUpdate
}