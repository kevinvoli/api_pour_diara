const { default: mongoose } = require("mongoose")

mongoose
exports.SchemaEleve= new mongoose.Schema({
    nom:String,
    prenom:String,
    dateNaissence:{type:Date},
    sexe:Boolean,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    classe: { type:mongoose.Schema.ObjectId, ref:"Classe-ref", childPath:"eleve" },
    presence: { type:mongoose.Schema.ObjectId, ref:"Cahier_Appel-ref"},
    releve: { type:mongoose.Schema.ObjectId, ref:"Releve-ref"},
    maitre: { type:mongoose.Schema.ObjectId, ref:"Maitre-ref"},
    parant: { type:mongoose.Schema.ObjectId, ref:"Parent-ref", childPath:"enfant" },
    sante: { type:mongoose.Schema.ObjectId, ref:"Sante-ref"},
    

})

exports.SchemaReleve = new mongoose.Schema({
    moyenne:Number,
    rang:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve-ref",childPath:'note'},

})

exports.SchemaParent = new mongoose.Schema({
    nom:String,
    prenom:String,
    sexe:Boolean,
    contact:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    enfant: { type:mongoose.Schema.ObjectId, ref:"Eleve-ref"},
    convocation: { type:mongoose.Schema.ObjectId, ref:"Convocation-ref"},

})
exports.SchemaMaitre = new mongoose.Schema({
    matricule:String,
    nom:String,
    prenom:String,
    sexe:Boolean,
    contact:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve-ref"},
    sante: { type:mongoose.Schema.ObjectId, ref:"Sante-ref"},

})

exports.SchemaSante = new mongoose.Schema({
    diagnostic:String,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve-ref",childPath:'sante'},
    maitre: { type:mongoose.Schema.ObjectId, ref:"Maitre-ref",childPath:'sante'},
    
})
exports.SchemaCahierAppel = new mongoose.Schema({
    status:Boolean,
    date:{type:Date},
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve-ref", childPath:"presence" },

})

exports.SchemaClasse = new mongoose.Schema({
    libelle:String,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve:[{type:mongoose.Schema.ObjectId,ref:'Eleve-ref'}]
})

exports.SchemaConvocation = new mongoose.Schema({
    libelle:String,
    compte_rendu:String,
    date:{type:Date},
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    parent: { type:mongoose.Schema.ObjectId, ref:"Parent-ref",childPath:'convocation'},
    directeur: { type:mongoose.Schema.ObjectId, ref:"Directeur-ref",childPath:'convocation'},

})

exports.SchemaDirecteur = new mongoose.Schema({
    matricule:String,
    nom:String,
    prenom:String,
    sexe:Boolean,
    contact:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    convocation: { type:mongoose.Schema.ObjectId, ref:"convocation-ref"},

})