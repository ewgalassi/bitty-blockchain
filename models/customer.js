var orm = require("../config/orm.js");

var customer = {
  selectOne: function (vals, cb) {
    orm.selectOne(vals, function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOneCust(cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (vals, condition, cb) {
    orm.updateOne(vals, condition, function (res) {
      cb(res);
    });
  }
}

module.exports = customer;