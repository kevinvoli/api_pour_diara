
var express = require('express');
const QueryApi = require('../src/controller/controller.query');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next)=> {
  let data= await QueryApi.getEleve()
  console.log('data de classe 2 :',data);
  res.status(200).json(data)
});

router.get('/:id',async (req,res,next)=>{
  let id = `${req.params.id}`
  console.log("monid",`${req.params.id}`);
  let data = await QueryApi.getOneEleve(id)

  res.status(200).json(data)
})
router.post('/',async (req,res,next)=>{
  console.log(req.body);
  let data = await QueryApi.setEleve(req.body)
  res.status(200).json(data)
})



module.exports = router;
