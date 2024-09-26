"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    const errorSources = [
        {
            path: err.path,
            message: err.message
        }
    ];
    return {
        message: "cast error",
        errorSources
    };
};
exports.default = handleCastError;
