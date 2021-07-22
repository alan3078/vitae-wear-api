import * as User from '../models/user-model'

import { UserDto } from '../dto/user.dto'

export const getAllUsers = async () => {
    // business logic/data manipulation here
    const users = await User.getAllUsers()
    return users
}

export const getUserById = async (id: string) => {
    // business logic/data manipulation here
    const users = await User.getUserById(id)
    return users
}

export const createUser = async (user: UserDto) => {
    // business logic/data manipulation here
    const users = await User.createUser(user)
    return users
}

export const removeUserById = async (id: string) => {
    // business logic/data manipulation here
    const users = await User.removeUserById(id)
    return users
}

export const putUserById = async (user: UserDto) => {
    // business logic/data manipulation here
    const users = await User.putUserById(user)
    return users
}

export const secondFunc = () => {}

// class UsersService implements CRUD {
//     async create(resource: CreateUserDto) {
//         return UsersDao.addUser(resource)
//     }

//     async deleteById(id: string) {
//         return UsersDao.removeUserById(id)
//     }

//     async list(limit: number, page: number) {
//         return UsersDao.getUsers()
//     }

//     async patchById(id: string, resource: PatchUserDto) {
//         return UsersDao.patchUserById(id, resource)
//     }

//     async readById(id: string) {
//         return UsersDao.getUserById(id)
//     }

//     async putById(id: string, resource: PutUserDto) {
//         return UsersDao.putUserById(id, resource)
//     }

//     async getUserByEmail(email: string) {
//         return UsersDao.getUserByEmail(email)
//     }
// }

// export default new UsersService()
