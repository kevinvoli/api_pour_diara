const {request, response} = require('express')
const noteQuery = require('../Query/noteQuery')

const noteController = class{
    static setnotes= async(req=request,res=response,next)=>{
        let data = await noteQuery.setnotes(data)
        
        res.status(200).json(data)
    }
    static getnote = async(req=request,res=response,next)=>{
        let data = await noteQuery.getnote(data)
    }
}
module.exports = noteController