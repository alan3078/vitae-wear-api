import * as Product from '../models/product-model'

import { ProductDto } from '../dto/product.dto'

export const getProduct = async (category: string,brand:string) => {
    // business logic/data manipulation here
    const product = await Product.getProduct(category,brand)
    return product
}

export const getProductById = async (id: string) => {
    // business logic/data manipulation here
    const product = await Product.getProductById(id)
    return product
}

export const addProduct = async (product: ProductDto) => {
    // business logic/data manipulation here
    const products = await Product.addProduct(product)
    return products
}

export const removeProductById = async (id: string): Promise<void> => {
    // business logic/data manipulation here
    await Product.removeProductById(id)
}

export const patchProductbyId = async (id: string, data: JSON) => {
    // business logic/data manipulation here
    const product = await Product.patchProductbyId(id, data)
    return product
}
