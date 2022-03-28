const models = require('../../models/database')

const noteQuery = class {
    static setnotes = (data)=>{
       models.Eleve.findById({_id:data.id})
            .then(eleve=>{
                let note= new models.Releve({
                    moyen:data.moyen,
                    rang: data.rang,
                    eleve:eleve._id
                }).save()
                return {note : note}
            }).catch(error=>{
               return {error:error}
            })
    }
    static getnote = (data)=>{
        models.Releve.find()
        .then(notes=>{
            return {notes:notes}
        })
        .catch(error=>{
            return {error:error}
        })
        
    }
}

module.exports = noteQuery