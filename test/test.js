//var assert = require("assert");
var assert = require("chai").assert;
var should = require('chai').should();
var expect = require('chai').expect();
var greetings = require("../libs/greetings");
var keygen = require("../libs/keygen");

/*
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('Greting', function(){
  describe('english()', function(){
    it('should return Hello', function(){
      assert.equal('Hello', greetings.english());
    })
  })

  describe('french()', function(){
    it('should return Bonjor', function(){
      assert.equal('Bonjor', greetings.french());
    })
  })
})

describe('Keygen', function(){
  describe('generate("12345")', function(){
    it('should return 827CCB0EEA8A706C4C34A16891F84E7B', function(){
      assert.equal('827CCB0EEA8A706C4C34A16891F84E7B', keygen.generate());
    })
  })
})
*/

 
describe('Keygen', function(){
  describe('generate("12345")', function(){
    it('should return 827CCB0EEA8A706C4C34A16891F84E7B', function(){
      keygen.generate("12345").should.equal('827CCB0EEA8A706C4C34A16891F84E7B');
    })
  })
})
