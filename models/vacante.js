const { model, Schema } = require('mongoose');
const slug = require('slug');
const shortid = require('shortid');

/* Dicen Que No Es Necesario */
// mongoose.Promise = global.Promise

const vacanteSchema = new Schema({
    titulo: {
        type: String,
        required: 'El Nombre De La Vacante Es Obligatorio',
        trim: true
    },
    empresa: {
        type: String,
        trim: true
    },
    ubicacion: {
        type: String,
        trim: true,
        required: 'La Ubicación Es Obligatoria'
    },
    salario: {
        type: String,
        default: 0,
        trim: true
    },
    contrato: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        lowercase: true
    },
    skills: [String],
    candidatos: [{
        nombre: String,
        email: String,
        cv: String
    }]
});

/* Tipos De Middlewares Que Se Ejecutan Antes, De Guardar El Objeto En La Base De Datos */
vacanteSchema.pre('save', function(next) {
    /* Crear La URL */
    /* This Hace referencia al objeto que se va a guardar en el modelo */
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}` // react-developer-1234333
    next();
});

module.exports = model('Vacante', vacanteSchema);