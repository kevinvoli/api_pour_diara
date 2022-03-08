const models = require("../../models/database")

const classeQuery = class {
    static setClasse = (data)=>{
        let dat =new models.Classe(data).save()
        return dat
    }
    static getClasse = ()=>{
        return models.Classe.find({})
        .populate({path:'eleve'})
        .setOptions({sanitizeFilter:true})
        .then((res)=>{
            console.log("tous ce passe bien:",res);
            return res
        }).catch(err=>{
            console.log('il ya une grosse erreur',err.message);
            return  err.message
        })
       
    }
    static getOneClasse = (data)=>{
        return models.Classe.findById({_id:`${data}`})
        .populate({path:'eleve'})
        .setOptions({sanitizeFilter:true})
        .then(res=>{
            console.log("tous ce passe bien:",res);
            return res
        })
        .catch(err=>{
            return err.message
        })
      
    }
    static addEleveInClasse= async(data)=>{

        return await models.Classe.updateOne({_id:data.id},{$push:{eleve:data.eleveId}})
        .then(res=>{
            return res
        })
        .catch(err=>{
            return err
        })
    }
}

module.exports = classeQuery