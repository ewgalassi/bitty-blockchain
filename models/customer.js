module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // Giving the Customer model a name of type STRING
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantityOwned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Customer;
};


// var orm = require("../config/orm.js");

// var customer = {
//   selectOne: function (vals, cb) {
//     orm.selectOne(vals, function (res) {
//       cb(res);
//     });
//   },
//   insertOne: function (cols, vals, cb) {
//     orm.insertOneCust(cols, vals, function (res) {
//       cb(res);
//     });
//   },
//   updateOne: function (vals, condition, cb) {
//     orm.updateOne(vals, condition, function (res) {
//       cb(res);
//     });
//   }
// }

// module.exports = customer;