const mongoose = require('mongoose');

const { Schema } = mongoose;

const jugadores = new Schema({
    "jugador_l": String,
    "camiseta_l": String,
    "golesl": Number,
    "tarjetas_l": String,
    "jugador_v": String,
    "camiseta_v": String,
    "golesv": Number,
    "tarjetas_v": String,
});

module.exports = mongoose.model('datos_jugadores', jugadores);
