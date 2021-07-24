import shortid from 'shortid'

import db from '../../db'
import { ProductDto } from '../dto/product.dto'

const collection: string = 'product'

// https://firebase.google.com/docs/firestore/query-data/get-data
// https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs

export const getProduct = async (category: string, brand: string) => {

    let queryCollection

    if (category) {
        queryCollection = await db
        .collection(collection)
        .where('category', '==', category)
    }
    
    if (brand) {
        queryCollection = await db
        .collection(collection)
        .where('brand', '==', brand)
    }

    if (!category && !brand) {
        queryCollection = await db
            .collection(collection)
    }

    if (queryCollection){
        const querySnapshot = await queryCollection.get()

        const product: Partial<ProductDto>[] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    
        return product
    } else {
        return null
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
