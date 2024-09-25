import { Order } from "./order.model"

export const createAOrderInToBD = async (payload: any) => {
    // const transactionId = '009894054'
    const orderdata = {
        ...payload,
        status: 'pending',
        paymentStatus: 'pending',
        transactionId: `TXN-${Date.now()}`

    }
    const result = await Order.create(orderdata)
    console.log(result);

    return result;
}
export const OrderServices = {
    createAOrderInToBD
}