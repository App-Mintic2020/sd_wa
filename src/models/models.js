const mongoose = require('mongoose');

const { Schema } = mongoose;

const partido = new Schema({
    "local": String,
    "visitante": String,
    "goles_l": Number,
    "goles_v": Number
});

module.exports = mongoose.model('datos_partidos', partido );