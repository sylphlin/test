var version = require(__dirname + '/../config/version.json');

exports.apiVersion = version.api;
exports.softwareVersion = version.software;

exports.versions = {
  software_version: version.software,
  api_version: version.api
};

