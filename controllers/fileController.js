'use strict';
const bucket = require('../storage');

const filename = 'Wear.png'

const destFileName = `product/${filename}`

const addFile = async(req, res, next) => {

    try {
        bucket.upload(filename, { destination: destinationFilename });
        res.send(`${filename} is already uploaded`);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

module.exports = {
    addFile
}