const models = require("../../models/database")

const QueryApi = class {
    static setEleve = (data)=>{
        let eleve = new models.Eleve(data).save()
    }
    static getEleve = ()=>{
        new models.Eleve.find({}).then((res)=>{
            console.log("tous ce passe bien:",res);
            return res
        }).catch(err=>{
            console.log('il ya une grosse erreur');
            return err
        })
    }
    static getOneEleve = (data)=>{
        return models.Eleve.findById({_id:`${data}`}).then(res=>{
            console.log("tous ce passe bien:",res);
            return res
        }).catch(err=>{
            return err
        })
      
    }
    static  getEleveConnect=(data)=>{
        return models.Eleve.find({data})
                .then(res=>{
                    return res
                })
                .catch(err=>{
                    return err
                })
    }



    static setClasse = (data)=>{
        let dat =new models.Classe(data).save()
        return dat
    }
    static getClasse = ()=>{
        return models.Classe.find({}).then((res)=>{
            console.log("tous ce passe bien:",res);
            return res
        }).catch(err=>{
            console.log('il ya une grosse erreur');
            return err
        })
       
    }
    static getOneClasse = (data)=>{
        return models.Classe.findById({_id:`${data}`}).then(res=>{
            console.log("tous ce passe bien:",res);
            return res
        }).catch(err=>{
            return err
        })
      
    }
    static addEleveInClasse= (data)=>{
        return models.Classe
    }

}
module.exports  = QueryApi