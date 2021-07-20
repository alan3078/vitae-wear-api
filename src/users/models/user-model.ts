import shortid from 'shortid'

import db from '../../db'

export const getAllUsers = async () => {
    // only for db connection
    // const users = await db.collection('users').get()
    // console.log('users: ', users)
    // return users
    const allUsers:any = []
    const querySnapshot = await db.collection('users').get()
    querySnapshot.forEach((doc: any) => allUsers.push(doc.data()))
    console.log('users: ', allUsers)
    return allUsers
}

// TODO: remove it once create new function
export const getUserById = async (id:string) => {
    const querySnapshot = await db
        .collection('users')
        .doc(id)
        .get()
    if (querySnapshot.exists){
        console.log('users: ',querySnapshot.data())
        return querySnapshot.data()
    }
    return null

}

// TODO: remove it once create new function
export const secondFunc = () => {
    console.log('dd')
}

// class UsersDao {
//     users: Array<CreateUserDto> = []

//     constructor() {
//         log('Created new instance of UsersDao')
//     }

//     async addUser(user: CreateUserDto) {
//         user.id = shortid.generate()
//         this.users.push(user)
//         return user.id
//     }

//     async getUsers() {
//         return this.users
//     }

//     async getUserById(userId: string) {
//         return this.users.find((user: { id: string }) => user.id === userId)
//     }

//     async putUserById(userId: string, user: PutUserDto) {
//         const objIndex = this.users.findIndex(
//             (obj: { id: string }) => obj.id === userId
//         )
//         this.users.splice(objIndex, 1, user)
//         return `${user.id} updated via put`
//     }

//     async patchUserById(userId: string, user: PatchUserDto) {
//         const objIndex = this.users.findIndex(
//             (obj: { id: string }) => obj.id === userId
//         )
//         let currentUser = this.users[objIndex]
//         const allowedPatchFields = [
//             'password',
//             'firstName',
//             'lastName',
//             'permissionLevel'
//         ]
//         for (const field of allowedPatchFields) {
//             if (field in user) {
//                 // @ts-ignore
//                 currentUser[field] = user[field]
//             }
//         }
//         this.users.splice(objIndex, 1, currentUser)
//         return `${user.id} patched`
//     }

//     async removeUserById(userId: string) {
//         const objIndex = this.users.findIndex(
//             (obj: { id: string }) => obj.id === userId
//         )
//         this.users.splice(objIndex, 1)
//         return `${userId} removed`
//     }

//     async getUserByEmail(email: string) {
//         const objIndex = this.users.findIndex(
//             (obj: { email: string }) => obj.email === email
//         )
//         let currentUser = this.users[objIndex]
//         if (currentUser) {
//             return currentUser
//         } else {
//             return null
//         }
//     }
// }

// export default new UsersDao()
