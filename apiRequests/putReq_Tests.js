'use strict'

const chai = require('chai');
const mocha = require('mocha');
const axios = require('axios');
const describe = mocha.describe;
const expect = chai.expect;

// PUT method
describe('PUT method - verify HTTP Status Codes', function() {
    it('should return 200 status when a user is updated', async function () {
        const url = 'https://reqres.in/api/users/2';
        const response = await axios.put(url, {
            name: 'Regina',
            job: "Miller's Daughter"
        })
        const data = response.data;
        const utc = new Date().toISOString()
        const tz_slice = new Date().toISOString().slice(0,19);
        const updatedAtStamp = response.data['updatedAt'].slice(0,19);
    
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
        expect(response.data['name']).to.equal("Regina");
        expect(response.data['job']).to.equal("Miller's Daughter");
        expect(updatedAtStamp).to.equal(tz_slice);
        
        console.log(data);
    })
})
