var version = require(__dirname + '/../config/version.json');

exports.apiVersion = version.api;
exports.softwareVersion = version.software;

exports.version = function (software) {
  return version.software;
};
