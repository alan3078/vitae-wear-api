const express = require('express');
const { addInvoice, getAllInvoices, getInvoice } = require('../controllers/invoiceContoller');

const router = express.Router();

router.post('/invoice', addInvoice);
router.get('/invoices', getAllInvoices);
router.get('/invoice/:id', getInvoice);

module.exports = {
    routes: router
}