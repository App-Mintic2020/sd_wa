const express = require('express');
const router = express.Router();
const partidos = require('../models/models');

router.post('/', async (req, res) => {
    const objeto_partido = new partidos(req.body);
    console.log(objeto_partido);
    await objeto_partido.save();
    res.json({
        status: 'Partido guardado'
    });
});

router.get('/', async (req, res) => {
    const lista_partidos =  await partidos.find();
    res.json(lista_partidos);
});

router.delete('/:id', async (req, res) => {
    await partidos.findByIdAndDelete(req.params.id);
    res.json({
        status: 'El partido ha sido eliminado'
    });
});

router.put('/:id', async (req, res) => {
    await partidos.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'El partido ha sido actualizado'
    });
});
module.exports = router;