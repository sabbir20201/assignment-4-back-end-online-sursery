import { Router } from "express";
import { OrderController } from "./order.controller";


const router = Router()

router.post('/', OrderController.createOrder)


export const orderRoutes = router