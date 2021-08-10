// we import express to add types to the request/response objects from our controller functions
import express, { NextFunction } from 'express'
import { InvoiceDto } from '../dto/invoice.dto'

import * as invoiceService from '../services/invoice-service'

const getInvoices = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const invoices = await invoiceService.getInvoices()
        res.status(200).json(invoices)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const getInvoiceById = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const invoice = await invoiceService.getInvoiceById(
            req.params.invoiceId
        )
        res.status(200).json(invoice)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const addInvoice = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service

    let date: Date = new Date()
    let dueDate: Date = new Date()
    let dueDay: number = parseInt(req.params.dueDay) || 30
    dueDate.setDate(dueDate.getDate() + dueDay)

    try {
        const { currencyCode, items } = req.body
        const invoice: Partial<InvoiceDto> = {
            currencyCode,
            date,
            dueDate,
            items
        }
        const invoices = await invoiceService.addInvoice(invoice)
        res.status(200).json(invoices)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const removeInvoiceById = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        await invoiceService.removeInvoiceById(req.params.invoiceId)
        res.status(204).send()
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

const patchInvoiceById = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    // handle response, request and error here, all logics stuff  go to service
    try {
        const invoice = await invoiceService.patchInvoiceById(
            req.params.invoiceId,
            req.body
        )
        res.status(200).send(invoice)
    } catch (error) {
        // will be caught by error-handler
        next(error)
    }
}

export {
    getInvoices,
    getInvoiceById,
    addInvoice,
    removeInvoiceById,
    patchInvoiceById
}