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

export const removeUserById = async (id: string): Promise<void> => {
    // business logic/data manipulation here
    await User.removeUserById(id)
}

export const putUserById = async (user: UserDto) => {
    // business logic/data manipulation here
    const users = await User.putUserById(user)
    return users
}
