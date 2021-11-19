'use strict'

const chai = require('chai');
const mocha = require('mocha');
const axios = require('axios');
const describe = mocha.describe;
const expect = chai.expect;

describe('DELETE Method - Verify HTTP Status Codes', function () {
    it('should return 204', async function () {
        const url = 'https://reqres.in/api/users/2'
        const response = await axios.delete(url, {

        })
        console.log(response);
        expect(response.status).to.equal(204);
        expect(response.statusText).to.equal('No Content');
        expect(response.data).to.equal('');

    })
})
