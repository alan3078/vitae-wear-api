import { Router } from 'express'
import {
    getInvoices,
    addInvoice,
    getInvoiceById,
    removeInvoiceById,
    patchInvoiceById
} from '../invoices/controllers/invoice-controller'

const invoiceRouter = Router()

invoiceRouter.get('/', getInvoices)
invoiceRouter.get('/:invoiceId', getInvoiceById)
invoiceRouter.post('/', addInvoice)
invoiceRouter.delete('/:invoiceId', removeInvoiceById)
invoiceRouter.patch('/:invoiceId', patchInvoiceById)

export default invoiceRouter
