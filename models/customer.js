var orm = require("../config/orm.js");

var customer = {
  selectOne: function (cb) {
    orm.selectOne(`customers`, function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne(`blocks`, cols, vals, function (res) {
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