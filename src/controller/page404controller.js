const {request,response} = require('express')

const controller404 = class {
    static send = async(req= request, res=response)=>{
        res.status(200).json({error:404,message:'ressource non trouver ou lien invalide'})
    }
}

module.exports = controller404