const { request,response } = require("express");
const classeQuery = require("../Query/classeQuery");

const classeController = class {
    static getAll = async(req=request,res= response, next)=> {
        let data= await classeQuery.getClasse()
        console.log('data de classe 2 :',data);
        res.status(200).json(data)
    }
    static getOne = async (req=request,res=response,next)=>{
        let id = `${req.params.id}`
        console.log("monid",`${req.params.id}`);
        let data = await classeQuery.getOneClasse(id)
      
        res.status(200).json(data)
    }
    static setClasse= async (req=request,res=response,next)=>{
        console.log(req.body);
        let data = await classeQuery.setClasse(req.body)
        res.status(201).json(data)
      }
    static addEleve=  async (req=request,res=response,next)=>{
        console.log(req.params.id);
        let data= await classeQuery.addEleveInClasse()
        res.status(200).json(data)
      }
}

module.exports = classeController
