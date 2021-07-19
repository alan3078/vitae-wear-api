// we import express to add types to the request/response objects from our controller functions
import express, { NextFunction, query } from 'express'

// we import our newly created user services

// we import the argon2 library for password hashing
import argon2 from 'argon2'

import * as userService from '../services/user-service'

const getAllUsers = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const users = await userService.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const getUserById = async (req: express.Request, res: express.Response) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const users = await userService.getUserById(req.params.userId)
        res.status(200).json(users)
    } catch (error) {
        // implement error handling
        console.log('error: ', error)
    }
}

export { getAllUsers, getUserById }

// class UsersController {
//     async listUsers(req: express.Request, res: express.Response) {
//         try {
//             const allUsers: any = []
//             const querySnapshot = await db.collection('users').get()
//             querySnapshot.forEach((doc: any) => allUsers.push(doc.data()))
//             res.status(200).json(allUsers)
//         } catch (error) {
//             res.status(500).json
//         }
//         //const users = await usersService.list(100, 0);
//         //res.status(200).send(users);
//     }

//     async getUserById(req: express.Request, res: express.Response) {
//         //const user = await usersService.readById(req.body.id);
//         //res.status(200).send(user);
//         try {
//             const querySnapshot = await db
//                 .collection('users')
//                 .doc(req.params.userId)
//                 .get()
//             if (querySnapshot.exists) {
//                 const userData = querySnapshot.data()
//                 res.status(200).json(userData)
//             } else {
//                 res.status(404).send({
//                     error: `User ${req.params.userId} not found`
//                 })
//             }
//         } catch (error) {
//             res.status(500).json
//         }
//         //const users = await usersService.list(100, 0);
//         //res.status(200).send(users);
//     }

//     async createUser(req: express.Request, res: express.Response) {
//         const {
//             email,
//             password,
//             firstName,
//             lastName,
//             invoiceNumber,
//             address,
//             tag,
//             phone,
//             permissionLevel
//         } = req.body
//         try {
//             const user = db.collection('users').doc()
//             const userObject = {
//                 id: user.id,
//                 email,
//                 password,
//                 firstName,
//                 lastName,
//                 invoiceNumber,
//                 address,
//                 tag,
//                 phone,
//                 permissionLevel
//             }

//             user.set(userObject)
//             res.status(200).send({
//                 status: 'success',
//                 message: 'user added successfully',
//                 data: userObject
//             })
//         } catch (error) {
//             res.status(500).json
//         }
//         //req.body.password = await argon2.hash(req.body.password);
//         //const userId = await usersService.create(req.body);
//         //res.status(201).send({ id: userId });
//     }

//     async patch(req: express.Request, res: express.Response) {
//         if (req.body.password) {
//             req.body.password = await argon2.hash(req.body.password)
//         }
//         log(await usersService.patchById(req.body.id, req.body))
//         res.status(204).send()
//     }

//     async put(req: express.Request, res: express.Response) {
//         req.body.password = await argon2.hash(req.body.password)
//         log(await usersService.putById(req.body.id, req.body))
//         res.status(204).send()
//     }

//     async removeUser(req: express.Request, res: express.Response) {
//         try {
//             await db.collection('users').doc(req.params.userId).delete()
//             res.status(204).send()
//         } catch (error) {
//             res.status(500).json
//         }
//         //const users = await usersService.list(100, 0);
//         //res.status(200).send(users);
//         //log(await usersService.deleteById(req.body.id));
//         //res.status(204).send();
//     }
// }
