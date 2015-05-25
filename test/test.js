// require('mocha-jscs')(['./test', './models']); // Array of paths

var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect();
var greetings = require('../libs/greetings');
var keygen = require('../libs/keygen');

describe('Keygen', function() {
  describe('generate("12345")', function() {
    it('should return 1827CCB0EEA8A706C4C34A16891F84E7B', function() {
      keygen.generate('12345').should.equal('1827CCB0EEA8A706C4C34A16891F84E7B');
    });
  });
});
