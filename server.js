var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var PORT = process.env.PORT || 7000;

var app = express();

app.use(express.static("docs"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require("./routes/customer-api-routes.js")(app);
require("./routes/block-api-routes.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});