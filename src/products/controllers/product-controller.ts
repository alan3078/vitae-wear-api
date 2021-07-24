// we import express to add types to the request/response objects from our controller functions
import express, { NextFunction } from 'express'

import * as productService from '../services/product-service'
import { ProductDto } from '../dto/product.dto'

const getAllProducts = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const products = await productService.getAllProducts()
        res.status(200).json(products)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const getProductById = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const products = await productService.getProductById(
            req.params.productId
        )
        res.status(200).json(products)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const createProduct = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const { id, name, price, sale, discount, description, photos } =
            req.body
        const product: ProductDto = {
            id,
            name,
            price,
            sale,
            discount,
            description,
            photos
        }
        const products = await productService.createProduct(product)
        res.status(200).json(products)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const removeProductbyId = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        await productService.removeProductById(req.params.productId)
        res.status(204).send()
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const patchProductbyId = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const product = await productService.patchProductbyId(req.params.productId, req.body)
        res.status(200).send(product)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

export {
    getAllProducts,
    getProductById,
    createProduct,
    removeProductbyId,
    patchProductbyId
}
