import { Router } from 'express'
import {
    getProduct,
    addProduct,
    getProductById,
    removeProductbyId,
    patchProductbyId
} from '../products/controllers/product-controller'

const productRouter = Router()

productRouter.get('/', getProduct)
productRouter.get('/:productId', getProductById)
productRouter.post('/', addProduct)
productRouter.delete('/:productId', removeProductbyId)
productRouter.patch('/:productId', patchProductbyId)

export default productRouter
