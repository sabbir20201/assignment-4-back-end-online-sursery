"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorSources = [
        {
            path: "",
            message: `${extractedMessage} is already exist`
        }
    ];
    return {
        errorSources,
    };
    console.log("already esixts");
};
exports.default = handleDuplicateError;
