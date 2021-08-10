// we import express to add types to the request/response objects from our controller functions
import express, { NextFunction } from 'express'

// we import our newly created user services

import * as userService from '../services/user-service'
import { UserDto } from '../dto/user.dto'

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

const getUserById = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const users = await userService.getUserById(req.params.userId)
        res.status(200).json(users)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const createUser = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    const {
        id,
        email,
        password,
        firstName,
        lastName,
        invoiceNumber,
        address,
        tag,
        phone,
        permissionLevel
    } = req.body
    const user: UserDto = {
        id,
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

    try {
        const users = await userService.createUser(user)
        res.status(200).json(users)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const removeUserbyId = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        await userService.removeUserById(req.params.userId)
        res.status(204).send()
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const putUserbyId = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    const {
        email,
        password,
        firstName,
        lastName,
        invoiceNumber,
        address,
        tag,
        phone,
        permissionLevel
    } = req.body
    const id: string = req.params.userId
    const user: UserDto = {
        id,
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
    try {
        await userService.putUserById(user)
        res.status(200).send({
            status: 'OK',
            message: user
        })
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

export { getAllUsers, getUserById, createUser, removeUserbyId, putUserbyId }
