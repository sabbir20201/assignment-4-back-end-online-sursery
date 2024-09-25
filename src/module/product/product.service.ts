import { Product } from "./product.model"

const createAProductInToDB = async (payload: string) => {
    const result = await Product.create(payload)
    return result
}
const findAProductByIdFromDB = async (payload: string) => {
    const result = await Product.findOne({ _id: payload })
    return result
}
const findAProductByIdAndUpdate = async (id: string,updatedData:object ) => {
    const result = await Product.findByIdAndUpdate(id, updatedData,{ new:true })
    return result
}

const getAllProductFromDB = async () => {
    const result = await Product.find({isDeleted: false});
    return result
}

const deleteAProductFromDB = async (id: string) => {
    const result = await Product.findByIdAndUpdate(id,
        { isDeleted: true },
        { new: true }
    );
    return result
}

export const ProductServices = {
    createAProductInToDB,
    getAllProductFromDB,
    findAProductByIdFromDB,
    deleteAProductFromDB,
    findAProductByIdAndUpdate
}