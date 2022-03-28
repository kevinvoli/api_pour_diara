const {request,response} = require('express')
const res = require('express/lib/response')
const ParentQuery = require('../Query/parentQuery')

const parentController = class {
    static getParent = async(req=request,res=response,next)=>{
        let data= await ParentQuery.getParent()

        res.status(200).json(data)
    }
    static setParent= async(req=request,res=response)=>{
        let data = await ParentQuery.setParent(data)
        res.status(200).json(data)
    }
}