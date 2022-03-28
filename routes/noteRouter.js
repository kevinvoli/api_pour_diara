let express = require('express');
const noteController = require('../src/controller/noteController');
let router = express.Router();

router.get('/',noteController.getnote)
router.post('/',noteController.setnotes);

module.exports= router