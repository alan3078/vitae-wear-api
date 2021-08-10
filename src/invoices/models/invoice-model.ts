import shortid from 'shortid'

import db from '../../db'
import { InvoiceDto } from '../dto/invoice.dto'

const collection: string = 'invoices'

export const getInvoices = async () => {
    // only for db connection

    // https://firebase.google.com/docs/firestore/query-data/get-data
    const querySnapshot = await db.collection(collection).get()

    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs
    const invoices: Partial<InvoiceDto>[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return invoices
}

export const addInvoice = async (invoice: Partial<InvoiceDto>) => {
    const invoiceRef = db.collection('collection').doc()
    const invoices: InvoiceDto = {
        id: invoiceRef.id,
        currencyCode: invoice.currencyCode!,
        date: invoice.date!,
        dueDate: invoice.dueDate!,
        items: invoice.items!
    }
    invoiceRef.set(invoices)
    console.log('set invoice: ', invoices)
    return invoices
}

export const getInvoiceById = async (id: string) => {
    const querySnapshot = await db.collection(collection).doc(id).get()
    if (querySnapshot.exists) {
        console.log(`${collection}: ${querySnapshot.data()}`)
        return querySnapshot.data()
    }
    return null
}

export const removeInvoiceById = async (id: string): Promise<void> => {
    await db.collection(collection).doc(id).delete()
    console.log(`remove ${collection} id: ${id}`)
}

export const patchInvoiceById = async (id: string, data: JSON) => {
    await db.collection(collection).doc(id).update(data)
    const querySnapshot = await db.collection(collection).doc(id).get()
    if (querySnapshot.exists) {
        console.log(`${collection}: ${querySnapshot.data()}`)
        return querySnapshot.data()
    }
    console.log(`patch ${collection} id: ${id} data: ${data}`)
    return null
}
