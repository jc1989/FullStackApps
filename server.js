const express = require("express");
const serverApp = express();
const axios = require('axios');

let counter = 0;

axios.get('http://localhost:3000/');



serverApp.use(express.static(__dirname + '/public'));

serverApp.get("/increment", function(request, response) {
    counter++;
    response.send(counter.toString());
});

serverApp.get("/decrement", function(request, response) {
    counter--;
    response.send(counter.toString());
});

serverApp.get("/reset", function(request, response){
    counter = 0;
})

serverApp.get("/value", function(request, response) {
    response.send(counter.toString());
});

serverApp.listen(3000, function() {
    console.log("My Server is listening on port 3000!");
});