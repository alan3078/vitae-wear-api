const request = require('supertest')
const app = require('../src/config/app')

describe('App', function () {
    it('has the default page', function (done) {
        request(app)
            .get('/')
            .expect(/Welcome to Express/, done)
    })
})
