
var express = require('express');
const classeController = require('../src/controller/classeRouterController');
const classeQuery = require('../src/Query/classeQuery');
var router = express.Router();

/* GET home page. */
router.get('/',classeController.getAll );
router.get('/:id',classeController.getOne)
router.get('/addeleve/:id',classeController.addEleve)


router.post('/',classeController.setClasse)

module.exports = router;
