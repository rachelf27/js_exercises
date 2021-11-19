'use strict'

const chai = require("chai");
const mocha = require("mocha");
const promised = require('chai-as-promised');
const axios = require('axios');
const describe = mocha.describe;
const expect = chai.expect;
chai.use(promised);

// POST method for adding users to the list, using Chai assertions with Mocha as BDD
describe("POST - verify HTTP Status Codes", function () {
    it("should return 201 with Created", async function () {
        const url = "https://reqres.in/api/users";
        const response = await axios.post(url, {
            firstName: 'Faith',
            lastName: 'Moore'
        })
        const data = response.data;

        expect(response.status).to.equal(201);
        expect(response.statusText).to.equal("Created");
        expect(data).to.be.an("object");

        console.log(data, '\n');
    })

    it("should return 400 with Bad Request", async function () {
        const url = "https://reqres.in/api/login";
        const response = await axios.post(url, {
            email: "jumob&blah"
        })
        .catch(function(error) {
            if (error.response) {
                console.log(url);
                console.log(error.response.status);
                console.log(error.response.statusText, '\n');
                expect(error.response.status).to.equal(400);
                expect(error.response.statusText).to.equal("Bad Request");
            }
            else if (error.request) {
                console.log(error.request);
            } 
            else { 
                console.log('Error', error.message); 
            }   
        });
    })
})