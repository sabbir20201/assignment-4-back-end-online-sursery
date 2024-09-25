import { object, z } from "zod";

const createZodProductSchema = object({

    image: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    rating: z.number(),
    category: z.string(),
})




export const zodProductSchema = {
    createZodProductSchema
}