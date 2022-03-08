const { request,response } = require("express");
const classeQuery = require("../Query/classeQuery");
const eleveQuery = require("../Query/eleveQuery");

const eleveController = class {
    static getAll =  async(req=request, res=response, next)=> {
        let data= await eleveQuery.getEleve()
        console.log('data de classe 2 :',data);
        res.status(200).json(data)
    }
    static getOne =async (req=request, res=response,next)=>{
        let id = `${req.params.id}`
        console.log("monid",`${req.params.id}`);
        let data = await eleveQuery.getOneEleve(id)
      
        res.status(200).json(data)
    }
    static setEleve=async (req=request, res=response,next)=>{
        console.log(req.body);
        let data = await eleveQuery.setEleve(req.body)
        res.status(200).json(data)
    }
}


module.exports = eleveController