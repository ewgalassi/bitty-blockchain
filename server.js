var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 7000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var routes = require("./controllers/block_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});