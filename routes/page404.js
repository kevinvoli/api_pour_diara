var express = require('express');
var router = express.Router();
const controller404 = require('../src/controller/page404controller');

router.get('/*',controller404.send);

module.exports= router