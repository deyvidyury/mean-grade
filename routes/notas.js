"use strict"
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Nota = require('../models/nota');

// Notas do estudante
router.get('/notas/:std_id',function(req,res,next){
    Nota.getNotasPorEstudante({std_id: req.params.std_id},(err,notas) => {
        if(err){
            res.send(err);
        }
        res.json(notas);
    })
})

// Notas do estudante no mes X
router.get('/nota/:std_id/:mes',function(req,res,next){
    Nota.getNotasPorMes({std_id: req.params.std_id, mes: req.params.mes}, (err,nota) => {
        if(err){
            res.send(err);
        }
        res.json(nota);
    })
})

// Adicionar nota do estudante Y no mes X
router.post('/nota/:std_id/:mes',function(req,res,next){
    let novaNota = new Nota({
        value: req.body.value,
        std_id: req.params.std_id,
        mes: req.params.mes
    })
    Nota.addNotaPorMes(novaNota, (err,nota) => {
        if(err){
            res.send(err);
        }
        res.json(nota);
    })
})

// Atualiza nota
route.put('/nota/:id',function(req,res,next){
    const nota = req.body;
    let uptNota = {};

    if(nota.value){
        uptNota = nota;
    }

    Nota.updateNota(uptNota,(err,_nota) => {
        if(err){
            res.send(err);
        }
        res.json(_nota);
    })
})

// Deletar notas do estudante, caso ele seja deletado
route.delete('/notas/:std_id',function(req,res,next){
    Nota.removeNotas({std_is: req.params.std_id},(err,nota)=>{
        if(err){
            res.send(err);
        }
        res.json(nota);
    })
})

module.exports = router;
