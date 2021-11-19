'use strict'

const axios = require ('axios');

//POST method to post to users list
axios.post('https://reqres.in/api/users', {
    firstName: 'Santa',
    lastName: 'Clause'
})
.then(function(response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});