var express = require("express");

var router = express.Router();

var block = require("../models/block.js");
var customer = require("../models/customer.js");

router.get("/", function (req, res) {
  block.selectAll(function (data) {
    return res.json(data);
  });
});

router.post("/api/blocks", function (req, res) {
  block.insertOne([
    "previousHash", "timestamp", "transaction", "hash"
  ], [
      req.body.previousHash, req.body.timestamp, req.body.transaction, req.body.hash
    ], function (result) {
      res.json({ index: result.insertId });
    });
});

router.post("/api/customer", function (req, res) {
  customer.insertOne([
    "username"
  ], [
      req.body.username
    ], function (result) {
      res.json({ item_id: result.insertId });
    });
});

router.put("/api/customer/:username", function (req, res) {
  var condition = req.params.username;

  console.log("condition", condition);

  customer.updateOne({
    quantityOwned: req.body.quantityOwned
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;