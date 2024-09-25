import { ErrorRequestHandler, NextFunction, Request, Response } from "express"
import { TErrorSources } from "../error/error.interface";
import handleValidationError from "../error/handleValidationError";
import handleCastError from "../error/handleCastError";
import handleDuplicateError from "../error/handleDup;icateError";
import { ZodError } from "zod";
import handleZodError from "../error/handleZodError";
import AppError from "../error/AppError";



export const globalErrorHandler: ErrorRequestHandler = async (
  err, req, res, next) => {

  let statusCode = 500;
  let message = "something went wrong";

  let errorSources: TErrorSources = [{
    path: "",
    message: "something went wrong"
  }]
  if (err.name === "ValidationError") {
    const simplified = handleValidationError(err)
    errorSources = simplified.errorSources
    console.log(simplified, "simplified");
  } else if (err.name === "CastError") {
    const simplified = handleCastError(err);
    errorSources = simplified.errorSources
  } else if (err.code === 11000) {
    const simplified = handleDuplicateError(err)
    errorSources = simplified.errorSources
  } else if (err instanceof ZodError) {
    const handledZodError = handleZodError(err)
    statusCode = handledZodError.statusCode;
    message = handledZodError.message;
    errorSources = handledZodError.errorSources;
  }else if(err instanceof AppError){
    statusCode= err.statusCode;
    message: err.message;
  }

  res.status(statusCode).json({
    success: false,
    message: err.name,
    errorSources,
    // success: false,
    // message,
    // errorSources,
    // message,
    // errorSources,
    // err
  })
}


