var orm = require("../config/orm.js");

var block = {
  selectAll: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne(`blocks`, cols, vals, function (res) {
      cb(res);
    });
  }
}

module.exports = block;