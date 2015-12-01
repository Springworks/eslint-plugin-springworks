"use strict";

var rule = require("../../../lib/rules/top-describe-path");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("top-describe-path", rule, {
  valid: [
    {
      code: "describe('tests/lib/rules/top-describe-path.js', function() { });",
      filename: __filename,
    },
    {
      code: "describe('tests/lib/rules/top-describe-path.js', function() {  describe('foo', function() { });  });",
      filename: __filename,
    },
    {
      code: "var x = 1; describe('tests/lib/rules/top-describe-path.js', function() {  describe('foo', function() { });  });",
      filename: __filename,
    },
  ],

  invalid: [
    {
      code: "describe(__filename, function() { });",
      output: "describe('tests/lib/rules/top-describe-path.js', function() { });",
      filename: __filename,
      errors: [{
        message: "Unexpected path in top describe",
        type: "Identifier"
      }],
    },
    {
      code: "describe(__filename, function() {  describe('foo', function() { });  });",
      output: "describe('tests/lib/rules/top-describe-path.js', function() {  describe('foo', function() { });  });",
      filename: __filename,
      errors: [{
        message: "Unexpected path in top describe",
        type: "Identifier"
      }],
    },
    {
      code: "describe('incorrect path', function() { });",
      output: "describe('tests/lib/rules/top-describe-path.js', function() { });",
      filename: __filename,
      errors: [{
        message: "Unexpected path in top describe",
        type: "Literal"
      }],
    },
    {
      code: "describe('incorrect path', function() {  describe('foo', function() { });  });",
      output: "describe('tests/lib/rules/top-describe-path.js', function() {  describe('foo', function() { });  });",
      filename: __filename,
      errors: [{
        message: "Unexpected path in top describe",
        type: "Literal"
      }],
    },
  ],
});
