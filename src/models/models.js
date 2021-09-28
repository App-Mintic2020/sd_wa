const mongoose = require('mongoose');

const { Schema } = mongoose;

const partido = new Schema({
    "equipo_a": String,
    "equipo_b": String,
    "goles_a": Number,
    "goles_b": Number
});

module.exports = mongoose.model('datos_partidos', partido );