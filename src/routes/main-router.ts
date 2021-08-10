import { Router } from 'express'

// import sub-routers
import userRouter from './user-router'
import productRouter from './product-router'
import invoiceRouter from './invoice-router'

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/invoices', invoiceRouter)

export default router
