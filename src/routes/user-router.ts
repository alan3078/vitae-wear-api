import { Router } from 'express'
import {
    createUser,
    getAllUsers,
    getUserById,
    putUserbyId,
    removeUserbyId
} from '../users/controllers/user-controller'

const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.post('/', createUser)
userRouter.delete('/:userId', removeUserbyId)
userRouter.put('/:userId', putUserbyId)

export default userRouter