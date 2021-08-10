import shortid from 'shortid'

import db from '../../db'
import { UserDto } from '../dto/user.dto'

export const getAllUsers = async () => {
    // only for db connection
    // https://firebase.google.com/docs/firestore/query-data/get-data
    const querySnapshot = await db.collection('users').get()

    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs
    const allUsers: Partial<UserDto>[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log('users: ', allUsers)
    return allUsers
}

// TODO: remove it once create new function
export const getUserById = async (id: string) => {
    const querySnapshot = await db.collection('users').doc(id).get()
    if (querySnapshot.exists) {
        console.log('users: ', querySnapshot.data())
        return querySnapshot.data()
    }
    return null
}

export const createUser = async (user: UserDto) => {
    const userDB = db.collection('users').doc(user.id)
    userDB.set(user)
    console.log('set users: ', user)
    return user
}

export const removeUserById = async (id: string): Promise<void> => {
    await db.collection('users').doc(id).delete()
    console.log('remove users id: ', id)
}

export const putUserById = async (user: UserDto) => {
    await db.collection('users').doc(user.id).set(user)
    console.log('put user id: ', user.id, 'data: ', user)
}