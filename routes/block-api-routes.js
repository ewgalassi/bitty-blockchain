// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the blocks
  app.get("/", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    db.Block.findAll().then(function(dbBlock) {
      res.json(dbBlock);
    });
  });

  // POST route for saving a new block
  app.post("/api/blocks", function(req, res) {
    db.Block.create(req.body).then(function(dbBlock) {
      res.json(dbBlock);
    });
  });

};
