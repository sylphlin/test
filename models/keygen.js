var cipher = require('crypto');

exports.generate = function(string) {
  var md5 = cipher.createHash('md5').update(string);
  var result = md5.digest('hex').toUpperCase();

  return result;
};

