var mysql     = require('mysql');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/database.json')[env];
var pool = mysql.createPool({
  connectionLimit: 5,
  host: config.host,
  user: config.username,
  password: config.password,
  port: config.port,
  database: config.database,
});


function auth(username, password, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    var sql = 'SELECT id FROM users WHERE username = ? AND password = ? LIMIT 1';
    var sqlParam = [username, password];

    connection.query(sql, sqlParam, function(err, results) {
      if (err) { throw err; }

      callback(results);

      connection.release();
    });
  });
};

module.exports = auth;
