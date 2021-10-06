const mongoose = require('mongoose');

const { Schema } = mongoose;

const partido = new Schema({
    "equipo_local": String,
    "equipo_visitante": String,
    "goles_local": Number,
    "goles_visitante": Number
});

module.exports = mongoose.model('datos_partidos', partido );