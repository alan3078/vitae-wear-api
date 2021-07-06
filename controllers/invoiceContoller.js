'use strict';

const firebase = require('../db');
const Invoice = require('../models/invoice');
const firestore = firebase.firestore();

const addInvoice = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('invoices').doc()
            .set(data);
        res.send('Record saved successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getAllInvoices = async (req, res, next) => {
    try {
        const invoices = await firestore.collection('invoices');
        const data = await invoices.get();
        const invoicesArray = [];
        if (data.empty) {
            res.status(404).send('No invoice record found');
        } else {
            data.forEach(doc => {
                const invoice = new Invoice(
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().address,
                    doc.data().amount
                )
                invoicesArray.push(invoice);
            })
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getInvoice = async (req, res, next) => {
    try {
        const id = req.params.id;
        const invoice = await firestore.collection('invoices').doc(id);
        const data = await invoice.get();
        if (!data.exists) {
            res.status(404).send('Invoice not found');
        } else {
            res.send(data.data());
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = {
    addInvoice,
    getAllInvoices,
    getInvoice
}