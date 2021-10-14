const express = require('express');
const router = express.Router();
const partido = require('../models/resultados');
const jugadores = require('../models/jugadores');
const mongoose = require("mongoose");

router.post('/', async (req, res) => {
    const objeto_partido = new partido(req.body);
    console.log(objeto_partido);
    await objeto_partido.save();
    res.json({
        status: 'Partido guardado'
    });
});

router.get('/', async (req, res) => {
    const lista_partidos =  await partido.find();
    res.json(lista_partidos);
});

router.delete('/:id', async (req, res) => {
    await partido.findByIdAndDelete(req.params.id);
    res.json({
        status: 'El partido ha sido eliminado'
    });
});

router.put('/:id', async (req, res) => {
    await partido.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'El partido ha sido actualizado'
    });
});



router.post('/jugadores', async (req, res) => {
    const objeto_jugadores = req.body;

    let jugadoresArray = [];

    objeto_jugadores.forEach(async (jug) => {
        if (jug._id) {
            await jugadores.updateOne({_id: jug._id}, jug);
        } else {
            await jugadores.create(jug);
        }
    });


    res.json({
        status: 'Jugadores guardados'
    });
});

router.get('/jugadores', async (req, res) => {
    const lista_jugadores =  await jugadores.find();
    res.json(lista_jugadores);
});

router.get('/jugadores/:id', async (req, res) =>{
    const lista_jugadores = await jugadores.findById(req.params.id)
    res.json(lista_jugadores);
});

router.delete('/jugadores/:id', async (req, res) => {
    await jugadores.findByIdAndDelete(req.params.id);
    res.json({
        status: 'El jugador ha sido eliminado'
    });
});

router.put('/jugadores/:id', async (req, res) => {
    await jugadores.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'El jugador ha sido actualizado'
    });
});



module.exports = router;