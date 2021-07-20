import { Router } from 'express'
import {
    createUser,
    getAllUsers,
    getUserById,
    removeUserbyId
} from '../users/controllers/user-controller'

const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.post('/', createUser)
userRouter.delete('/:userId', removeUserbyId)

export default userRouter

// export class UsersRoutes extends CommonRoutesConfig {
//     constructor(app: express.Application) {
//         super(app, 'UsersRoutes')
//     }

//     configureRoutes(): express.Application {
//         this.app
//             .route(`/api/v1/users`)
//             .get(UsersController.listUsers)
//             .post(
//                 UsersMiddleware.validateRequiredUserBodyFields,
//                 UsersMiddleware.validateSameEmailDoesntExist,
//                 UsersController.createUser
//             )

//         this.app.param(`/api/v1/userId`, UsersMiddleware.extractUserId)
//         this.app
//             .route(`/api/v1/users/:userId`)
//             // .all(UsersMiddleware.validateUserExists)
//             .get(UsersController.getUserById)
//             .delete(UsersController.removeUser)

//         this.app.put(`/api/v1/users/:userId`, [
//             UsersMiddleware.validateRequiredUserBodyFields,
//             UsersMiddleware.validateSameEmailBelongToSameUser,
//             UsersController.put
//         ])

//         this.app.patch(`/api/v1/users/:userId`, [
//             UsersMiddleware.validatePatchEmail,
//             UsersController.patch
//         ])

//         return this.app
//     }
// }
