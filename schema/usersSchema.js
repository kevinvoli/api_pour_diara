const { default: mongoose } = require("mongoose")

mongoose
exports.SchemaEleve= new mongoose.Schema({
    nom:String,
    prenom:String,
    dateNaissence:{type:Date},
    sexe:Boolean,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    classe: { type:mongoose.Schema.ObjectId, ref:"Classe", childPath:"eleve" },
    presence: { type:mongoose.Schema.ObjectId, ref:"Cahier_Appel"},
    releve: { type:mongoose.Schema.ObjectId, ref:"Releve"},
    maitre: { type:mongoose.Schema.ObjectId, ref:"Maitre"},
    parant: { type:mongoose.Schema.ObjectId, ref:"Parent", childPath:"enfant" },
    sante: { type:mongoose.Schema.ObjectId, ref:"Sante"},
    

})

exports.SchemaReleve = new mongoose.Schema({
    moyenne:Number,
    rang:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve",childPath:'note'},

})

exports.SchemaParent = new mongoose.Schema({
    nom:String,
    prenom:String,
    sexe:Boolean,
    contact:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    enfant: { type:mongoose.Schema.ObjectId, ref:"Eleve"},
    convocation: { type:mongoose.Schema.ObjectId, ref:"Convocation"},

})
exports.SchemaMaitre = new mongoose.Schema({
    matricule:String,
    nom:String,
    prenom:String,
    sexe:Boolean,
    contact:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve"},
    sante: { type:mongoose.Schema.ObjectId, ref:"Sante"},

})

exports.SchemaSante = new mongoose.Schema({
    diagnostic:String,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve",childPath:'sante'},
    maitre: { type:mongoose.Schema.ObjectId, ref:"Maitre",childPath:'sante'},
    
})
exports.SchemaCahierAppel = new mongoose.Schema({
    status:Boolean,
    date:{type:Date},
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve: { type:mongoose.Schema.ObjectId, ref:"Eleve", childPath:"presence" },

})

exports.SchemaClasse = new mongoose.Schema({
    libelle:String,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    eleve:[{type:mongoose.Schema.ObjectId,ref:'Eleve'}]
})

exports.SchemaConvocation = new mongoose.Schema({
    libelle:String,
    compte_rendu:String,
    date:{type:Date},
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    parent: { type:mongoose.Schema.ObjectId, ref:"Parent",childPath:'convocation'},
    directeur: { type:mongoose.Schema.ObjectId, ref:"Directeur",childPath:'convocation'},

})

exports.SchemaDirecteur = new mongoose.Schema({
    matricule:String,
    nom:String,
    prenom:String,
    sexe:Boolean,
    contact:Number,
    dateAt:{type:Date,default:Date.now},
    dateUp:{type:Date,default:Date.now},
    convocation: { type:mongoose.Schema.ObjectId, ref:"convocation"},

})