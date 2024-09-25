import { NextFunction, Request, Response } from "express";

export const notFound = async(req:Request, res: Response, next: NextFunction)=>{
    return res.status(404).json({
        success: false,
        message: "API not found",
        error : ""
    })
}