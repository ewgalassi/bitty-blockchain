var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM blocks;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    selectOne: function(vals, cb) {
      var queryString = "SELECT * FROM customers WHERE username=" + vals + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOneCust: function(cols, vals, cb) {
      var queryString = "SELECT * FROM customers WHERE " + cols + "=" + vals + ";";  

      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
      
      queryString = "INSERT INTO customers (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    insertOneBlock: function(cols, vals, cb) {
      var queryString = "INSERT INTO blocks (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    updateOne: function(vals, condition, cb) {
      var queryString = "UPDATE customers SET quantityOwned=";
      queryString += vals;
      queryString += " WHERE username=";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
}

module.exports = orm;