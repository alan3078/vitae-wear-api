import * as Product from '../models/product-model'

import { ProductDto } from '../dto/product.dto'

export const getProductsByCategory = async (category: string) => {
    // business logic/data manipulation here
    const product = await Product.getProductsByCategory(category)
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
