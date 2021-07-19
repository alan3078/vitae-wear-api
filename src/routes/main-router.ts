import { Router } from 'express'

// import sub-routers
import userRouter from './user-router'

const router = Router()

router.use('/users', userRouter)

export default router
