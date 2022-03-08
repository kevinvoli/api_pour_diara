const { default: mongoose } = require('mongoose');

let cahierAppel = require('../schema/usersSchema').SchemaCahierAppel;
let eleve =  require('../schema/usersSchema').SchemaEleve;
let maitre  =  require('../schema/usersSchema').SchemaMaitre;
let releve =  require('../schema/usersSchema').SchemaReleve;
let sante =  require('../schema/usersSchema').SchemaSante;
let classe =  require('../schema/usersSchema').SchemaClasse;
let convocation =  require('../schema/usersSchema').SchemaConvocation;
let parent =  require('../schema/usersSchema').SchemaParent;
let directeur =  require('../schema/usersSchema').SchemaDirecteur;

exports.CahierAppel= mongoose.model('Cahier_Appel',cahierAppel);
exports.Eleve = mongoose.model('Eleve',eleve);
exports.Maitre = mongoose.model('Maitre',maitre);
exports.Releve = mongoose.model('Releve',releve);
exports.Sante = mongoose.model('Sante',sante);
exports.Classe = mongoose.model('Classe',classe);
exports.Convocation = mongoose.model('Convocation',convocation);
exports.Parent = mongoose.model('Parent',parent);
exports.Directeur = mongoose.model('Directeur',directeur)
