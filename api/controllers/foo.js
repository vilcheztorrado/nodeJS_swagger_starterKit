'use strict';

var yaml_config = require('node-yaml-config');
var messages = yaml_config.load('./config/messages.yml');

module.exports = {
  foo: foo
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function foo(req, res) {
  res.json({message: messages.foo});
}
