// we import express to add types to the request/response objects from our controller functions
import express from 'express';

// we import our newly created user services
import usersService from '../services/users.service';

// we import the argon2 library for password hashing
import argon2 from 'argon2';

// we use debug with a custom context as described in Part 1
import debug from 'debug';

import db from '../../src/config/db'

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        try {
            const allUsers: any = []
            const querySnapshot = await db.collection('users').get()
            querySnapshot.forEach((doc: any) => allUsers.push(doc.data()))
            res.status(200).json(allUsers)
        } catch (error) {
            res.status(500).json
        }
        //const users = await usersService.list(100, 0);
        //res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await usersService.readById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const {
            email,
            password,
            firstName,
            lastName,
            invoiceNumber,
            address,
            tag,
            phone,
            permissionLevel } = req.body
        try {
            const user = db.collection('users').doc()
            const userObject = {
                id: user.id,
                email,
                password,
                firstName,
                lastName,
                invoiceNumber,
                address,
                tag,
                phone,
                permissionLevel
            }

            user.set(userObject)
            res.status(200).send({
                status: 'success',
                message: 'user added successfully',
                data: userObject
            })
        } catch (error) {
            res.status(500).json
        }
        //req.body.password = await argon2.hash(req.body.password);
        //const userId = await usersService.create(req.body);
        //res.status(201).send({ id: userId });
    }

    async patch(req: express.Request, res: express.Response) {
        if (req.body.password) {
            req.body.password = await argon2.hash(req.body.password);
        }
        log(await usersService.patchById(req.body.id, req.body));
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        log(await usersService.putById(req.body.id, req.body));
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        log(await usersService.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new UsersController();