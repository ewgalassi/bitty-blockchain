var db = require("../models");

module.exports = function(app) {
  app.post("/api/customer/:username", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Customer.findOrCreate({
      where: {
        username: req.params.username
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.put("api/customer/:username", function(req, res) {
    db.Customer.update({
      quantityOwned: req.body.quantityOwned
    }, {
      where: {
        username: req.params.username
      }
    })
  })

};
