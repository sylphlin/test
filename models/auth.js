var mysql     = require('mysql');
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../config/database.json')[env];
var pool = mysql.createPool({
  connectionLimit : 5,
  host     : config.host,
  user     : config.username,
  password : config.password,
  port     : config.port,
  database : config.database
});


exports.auth = function(username, password, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    var sql = "SELECT id WHERE username = ? AND password = ? LIMIT 1";
    var sql_param = [username, password];

    connection.query(sql, sql_param, function(err, results) {
      var isPass = 0;

      if(err) { throw err; }

      console.log(results);
    }

    callback(results);

    connection.release();

    });
  });
};

auth('admin', 'admin', function() {
  console.log();
});
