let express = require('express');
const { router } = require('../app');
const { route } = require('./noteRouter');
let router= express.Router();


router.get('/',parentController.getParent)
router.post('/',parentController.setParent)