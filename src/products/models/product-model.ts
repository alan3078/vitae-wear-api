import shortid from 'shortid'

import db from '../../db'
import { ProductDto } from '../dto/product.dto'

const collection: string = 'products'

// https://firebase.google.com/docs/firestore/query-data/get-data
// https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs

export const getProductsByCategory = async (category: string) => {
    let queryCollection

    if (category) {
        queryCollection = db
            .collection(collection)
            .where('category', '==', category)
    } else {
        queryCollection = db.collection(collection)
    }

    if (queryCollection) {
        const querySnapshot = await queryCollection.get()

        const products: Partial<ProductDto>[] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        return products
    }
    return null
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
