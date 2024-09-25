import { TErrorSources } from "./error.interface";

const handleDuplicateError = (err:any)=>{
    const match = err.message.match(/"([^"]*)"/)
  const extractedMessage = match && match[1];
    const errorSources: TErrorSources = [
        {
            path: "",
            message: `${extractedMessage} is already exist`
        }
    ] 
    return {
        errorSources,
    }
    console.log("already esixts");
    
}

export default handleDuplicateError