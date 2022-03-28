const models = require('../../models/database')
const eleveQuery = require('./eleveQuery')

const parentQuery=class {
    static setParent = (data)=>{
        let parent = new models.Parent(data.parent).save()
    }
    static getUserNote = (data)=>{
        let eleve = eleveQuery.getOneEleve(data.eleveId)
            .then(eleve=>{
                models.Parent.findOne({
                    enfant:eleve._id
                })
                .then(note=>{
                    models.Eleve.updateOne()
                })
            })
    }
    static getParent = (data)=>{
        let parent = models.Parent.find()
        .then(parent=>{
            return {parent:parent}
        })
        .catch(error=>{
            return {error:error}
        })
    }
}

module.exports= parentQuery