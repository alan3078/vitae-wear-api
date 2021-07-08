const express = require('express');
const { addFile } = require('../controllers/fileController');

const router = express.Router();

router.post('/file', addFile);

module.exports = {
    routes: router
}