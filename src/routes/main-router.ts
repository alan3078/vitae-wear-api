import { Router } from 'express'

// import sub-routers
import userRouter from './user-router'
import productRouter from './product-router'

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)

export default router
