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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const handleValidationError_1 = __importDefault(require("../error/handleValidationError"));
const handleCastError_1 = __importDefault(require("../error/handleCastError"));
const handleDup_icateError_1 = __importDefault(require("../error/handleDup;icateError"));
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../error/handleZodError"));
const AppError_1 = __importDefault(require("../error/AppError"));
const globalErrorHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 500;
    let message = "something went wrong";
    let errorSources = [{
            path: "",
            message: "something went wrong"
        }];
    if (err.name === "ValidationError") {
        const simplified = (0, handleValidationError_1.default)(err);
        errorSources = simplified.errorSources;
        console.log(simplified, "simplified");
    }
    else if (err.name === "CastError") {
        const simplified = (0, handleCastError_1.default)(err);
        errorSources = simplified.errorSources;
    }
    else if (err.code === 11000) {
        const simplified = (0, handleDup_icateError_1.default)(err);
        errorSources = simplified.errorSources;
    }
    else if (err instanceof zod_1.ZodError) {
        const handledZodError = (0, handleZodError_1.default)(err);
        statusCode = handledZodError.statusCode;
        message = handledZodError.message;
        errorSources = handledZodError.errorSources;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
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
    });
});
exports.globalErrorHandler = globalErrorHandler;
