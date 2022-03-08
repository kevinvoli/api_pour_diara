
var express = require('express');
const QueryApi = require('../src/controller/classeRouterController');
const eleveController = require('../src/controller/eleveControlleRouter');
var router = express.Router();

/* GET home page. */
router.get('/',eleveController.getAll);

router.get('/:id',eleveController.getOne)
router.post('/',eleveController.setEleve)



module.exports = router;
