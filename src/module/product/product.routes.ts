import { Router } from "express";
import { productController } from "./product.controller";
import { zodProductSchema } from "./product.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router()
// validateRequest(zodProductSchema.createZodProductSchema)
router.post('/',productController.createAProduct)
router.get('/:id', productController.findAProductById)
router.get('/', productController.getAllProduct)
router.put('/:id', productController.findAProductAndUpdate)
router.delete('/:id', productController.deleteAProduct)

export const productRoutes = router