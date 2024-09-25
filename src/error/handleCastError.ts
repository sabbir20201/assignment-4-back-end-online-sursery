import mongoose from "mongoose";
import { TErrorSources } from "./error.interface";

const handleCastError = (err: mongoose.Error.CastError)=>{
    const errorSources : TErrorSources = [
        {
            path: err.path,
            message: err.message 
        }
    ]
    return {
        message: "cast error",
        errorSources
    }
}

export default handleCastError