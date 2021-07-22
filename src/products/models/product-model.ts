import shortid from 'shortid'

import db from '../../db'
import { ProductDto } from '../dto/product.dto'

export const getAllProducts = async () => {
    // only for db connection

    // https://firebase.google.com/docs/firestore/query-data/get-data
    const querySnapshot = await db.collection('products').get()

    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs
    const products: Array<any> = querySnapshot.docs.map(doc => ({
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

export const removeProductById = async (id: string) => {
    await db.collection('products').doc(id).delete()
    console.log('remove products id: ', id)
}

export const patchProductbyId = async (product: ProductDto) => {
    await db
        .collection('products')
        .doc(product.id)
        .update({ discount: product.discount })
    console.log('patch product id: ', product.id, 'data: ', product)
}

// TODO: remove it once create new function
export const secondFunc = () => {
    console.log('dd')
}
