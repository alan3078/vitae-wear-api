import { Router } from 'express'
import {
    getAllProducts,
    createProduct,
    getProductById,
    removeProductbyId
} from '../products/controllers/product-controller'

const productRouter = Router()

productRouter.get('/', getAllProducts)
productRouter.get('/:productId', getProductById)
productRouter.post('/', createProduct)
productRouter.delete('/:productId', removeProductbyId)

export default productRouter
