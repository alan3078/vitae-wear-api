import { NextFunction, Request, Response } from 'express'

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.statusCode === 404) {
        res.status(res.statusCode).json({
            code: res.statusCode,
            message: err.message
        })
    }

    res.status(500).send({
        code: 500,
        message: err.message
    })
}

export default errorHandler
