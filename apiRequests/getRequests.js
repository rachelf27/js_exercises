'use strict'

const axios = require('axios');

// GET methods to retrieve users
function getAllUsers() {
    axios.get("https://reqres.in/api/users?page=2")
        
        .then(function(response) {
            console.log(response);
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
        });
}
function getSingleUser() {
    axios.get("https://reqres.in/api/users/2")
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
        });
}
function getUnknownList() {
    axios.get("https://reqres.in/api/unknown")
        .then(function(response) {
            return response;
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
        });
}
getAllUsers();
getSingleUser();
getUnknownList();