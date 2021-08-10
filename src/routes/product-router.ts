import { Router } from 'express'
import {
    getProductsByCategory,
    addProduct,
    getProductById,
    removeProductbyId,
    patchProductbyId
} from '../products/controllers/product-controller'

const productRouter = Router()

productRouter.get('/', getProductsByCategory)
productRouter.get('/:productId', getProductById)
productRouter.post('/', addProduct)
productRouter.delete('/:productId', removeProductbyId)
productRouter.patch('/:productId', patchProductbyId)

export default productRouter
