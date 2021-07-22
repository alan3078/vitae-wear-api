import * as Product from '../models/product-model'

import { ProductDto } from '../dto/product.dto'

export const getAllProducts = async () => {
    // business logic/data manipulation here
    const products = await Product.getAllProducts()
    return products
}

export const getProductById = async (id: string) => {
    // business logic/data manipulation here
    const products = await Product.getProductById(id)
    return products
}

export const createProduct = async (product: ProductDto) => {
    // business logic/data manipulation here
    const products = await Product.createProduct(product)
    return products
}

export const removeProductById = async (id: string) => {
    // business logic/data manipulation here
    const product = await Product.removeProductById(id)
    return product
}

export const patchProductbyId = async (product: ProductDto) => {
    // business logic/data manipulation here
    const products = await Product.patchProductbyId(product)
    return products
}

export const secondFunc = () => {}