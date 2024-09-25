import express, { NextFunction, Request, Response } from "express"
const app = express()
import cors from 'cors'
import { productRoutes } from "./module/product/product.routes"
import { notFound } from "./middleware/NotFound"
import { globalErrorHandler } from "./middleware/globalErrorHandler"
import { orderRoutes } from "./module/order/order.routes"

app.use(cors())
app.use(express.json())
app.use('/api/product',productRoutes)
app.use('/api/checkout',orderRoutes)
// app.use('/')

app.use(globalErrorHandler)

app.get('/', (req:Request , res: Response) => {
  res.send('Hello World')
});

app.use(notFound)




export default app