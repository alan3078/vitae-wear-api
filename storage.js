'use strict';

const admin = require('firebase-admin');
const config = require('./config');

admin.initializeApp({
    credential: admin.credential.cert(config.firebaseServiceConfig),
    storageBucket: config.firebaseConfig.storageBucket
});

const bucket = admin.storage().bucket();

module.exports = bucket;