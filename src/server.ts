import mongoose from "mongoose";
import app from "./app";
import config from "./config";


async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(5000, () => {
            console.log(`Example app listening on port ${5000}`)
          })
    } catch (error) {
        console.log(error);
        
    }
  
}

main()