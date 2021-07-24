import shortid from 'shortid'

import db from '../../db'
import { ProductDto } from '../dto/product.dto'

export const getAllProducts = async () => {
    // only for db connection

    // https://firebase.google.com/docs/firestore/query-data/get-data
    const querySnapshot = await db.collection('products').get()

    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs
    const products: Partial<ProductDto>[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log('prodcuts: ', products)
    return products
}

export const getProductById = async (id: string) => {
    const querySnapshot = await db.collection('products').doc(id).get()
    if (querySnapshot.exists) {
        console.log('Products: ', querySnapshot.data())
        return querySnapshot.data()
    }
    return null
}

export const createProduct = async (product: ProductDto) => {
    const productDB = db.collection('products').doc(product.id)
    productDB.set(product)
    console.log('set product: ', product)
    return product
}

export const removeProductById = async (id: string): Promise<void> => {
    await db.collection('products').doc(id).delete()
    console.log('remove products id: ', id)
}

export const patchProductbyId = async (id: string, data: JSON) => {
    await db.collection('products').doc(id).update(data)
    const querySnapshot = await db.collection('products').doc(id).get()
    if (querySnapshot.exists) {
        console.log('Products: ', querySnapshot.data())
        return querySnapshot.data()
    }
    console.log('patch product id: ', id, 'data: ', data)
    return null
}
