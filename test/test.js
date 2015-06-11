// require('mocha-jscs')(['./test', './models']); // Array of paths

var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect();
var supertest = require('supertest');
var express = require('express');
var app = express();
var api = supertest('http://localhost:3000');
var keygen = require('../models/keygen');
var server = require('../models/server');

describe('Test Key Generation', function() {
  describe('keygen.generate("12345")', function() {
    it('should return 827CCB0EEA8A706C4C34A16891F84E7B', function() {
      keygen.generate('12345').should.equal('827CCB0EEA8A706C4C34A16891F84E7B');
    });
  });
});

describe('Check Server Version', function() {
  describe('Check Software Version', function() {
    it('should return 0.0.5', function() {
      server.softwareVersion.should.equal('0.0.5');
    });
  });

  describe('Check API Server Version', function() {
    it('should return HTTP response 200', function() {
      api.get('/api/server/status')
      .set('Accept', 'applicaiton/json')
      .expect(200);
    });
  });

  describe('Check API Version', function() {
    it('should return 0.0.1', function() {
      server.apiVersion.should.equal('0.0.1');
    });
  });
});
