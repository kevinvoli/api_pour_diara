const models = require("../../models/database")

const eleveQuery = class {
    static setEleve = (data)=>{
        let eleve = new models.Eleve(data).save()
    }
    static getEleve = ()=>{
        return models.Eleve.find({})
        .setOptions({sanitizeFilter:true})
        .then((res)=>{
            console.log("tous ce passe bien:",res);
            return res
        }).catch(err=>{
            console.log('il ya une grosse erreur');
            return err
        })
    }
    static getOneEleve = (data)=>{
        return models.Eleve.findById({_id:`${data}`})
        .setOptions({sanitizeFilter:true})
        .then(res=>{
            console.log("tous ce passe bien:",res);
            return res
        }).catch(err=>{
            return err
        })
      
    }
    static  getEleveConnect=(data)=>{
        return models.Eleve.find({data})
        .setOptions({sanitizeFilter:true})
        .then(res=>{
            return res
        })
        .catch(err=>{
            return err
        })
    }
}
module.exports  = eleveQuery