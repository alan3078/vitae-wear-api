import * as Invoice from '../models/invoice-model'

import { InvoiceDto } from '../dto/invoice.dto'

export const getInvoices = async () => {
    // business logic/data manipulation here
    const invoices = await Invoice.getInvoices()
    return invoices
}
export const getInvoiceById = async (id: string) => {
    // business logic/data manipulation here
    const invoice = await Invoice.getInvoiceById(id)
    return invoice
}

export const addInvoice = async (invoice: Partial<InvoiceDto>) => {
    // business logic/data manipulation here
    const invoices = await Invoice.addInvoice(invoice)
    return invoices
}

export const removeInvoiceById = async (id: string): Promise<void> => {
    // business logic/data manipulation here
    await Invoice.removeInvoiceById(id)
}

export const patchInvoiceById = async (id: string, data: JSON) => {
    // business logic/data manipulation here
    const invoice = await Invoice.patchInvoiceById(id, data)
    return invoice
}
