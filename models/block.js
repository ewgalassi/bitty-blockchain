module.exports = function(sequelize, DataTypes) {
  var Block = sequelize.define("Block", {
    index: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    previousHash: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    transaction: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING(400),
      allowNull: false
    }
  });

  return Block;
};

// var orm = require("../config/orm.js");

// var block = {
//   selectAll: function (cb) {
//     orm.selectAll(function (res) {
//       cb(res);
//     });
//   },
//   insertOne: function (cols, vals, cb) {
//     orm.insertOneBlock(cols, vals, function (res) {
//       cb(res);
//     });
//   }
// }

// module.exports = block;