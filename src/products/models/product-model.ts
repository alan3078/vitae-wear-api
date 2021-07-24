import shortid from 'shortid'

import db from '../../db'
import { ProductDto } from '../dto/product.dto'

const collection:string = 'product'

// https://firebase.google.com/docs/firestore/query-data/get-data
// https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs
const getAllProduct = async () => {
    const querySnapshot = await db.collection(collection).get()
    const product: Partial<ProductDto>[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return product
}

const getProductByCategory = async (category: string) => {
    const querySnapshot = await db
        .collection(collection)
        .where('category', '==', category)
        .get()
    const product: Partial<ProductDto>[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return product
}

export const getProduct = async (category: string) => {
    switch (category) {
        case 'all':
            return getAllProduct()
        default:
            return getProductByCategory(category)
    }
}

export const getProductById = async (id: string) => {
    const querySnapshot = await db.collection(collection).doc(id).get()
    if (querySnapshot.exists) {
        console.log(`${collection}: ${querySnapshot.data()}`)
        return querySnapshot.data()
    }
    return null
}

export const addProduct = async (product: ProductDto) => {
    const productDB = db.collection('product').doc(product.id)
    productDB.set(product)
    console.log(`set ${collection}: ${product}`)
    return product
}

export const removeProductById = async (id: string): Promise<void> => {
    await db.collection(collection).doc(id).delete()
    console.log(`remove ${collection} id: ${id}`)
}

export const patchProductbyId = async (id: string, data: JSON) => {
    await db.collection(collection).doc(id).update(data)
    const querySnapshot = await db.collection(collection).doc(id).get()
    if (querySnapshot.exists) {
        console.log(`${collection}: ${querySnapshot.data()}`)
        return querySnapshot.data()
    }
    console.log(`patch ${collection} id: ${id} data: ${data}`)
    return null
}
