"use strict"
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Estudante = require('../models/estudante');

// Get para todos os estudantes
router.get('/estudantes',function(req,res,next){
    Estudante.getAllEstudantes((err,estudantes)=>{
        if(err) throw err;
        return res.json(estudantes);
    });
});

// Get estudante por id
router.get('/estudante/:id',function(req,res,next){
    Estudante.getEstudanteById({id: req.params.id},(err,estudante)=>{
        if(err){
            res.send(err);
        }
        res.json(estudante);
    })
})

// ! Not working
// Get estudante por nome
// router.post('/estudante',function(req,res,next){
//     Estudante.getEstudanteByName({name: req.body.name},(err,estudante)=>{
//         if(err){
//             res.send(err);
//         }
//         res.json(estudante);
//     })
// })

// Save estudante
router.post('/estudante',function(req,res,next){
    let novoEstudante = new Estudante({
        name: req.body.name
    });

    // console.log(req.body);

    Estudante.addEstudante(novoEstudante, (err,estudante) => {
        if(err){
            res.json({success: false, msg:"Nao pode salvar estudante"});
        } else {
            res.json({success: true, msg:"Estudante cadastrado"});
            // Criar quatro notas para o aluno
        }
    })


})

// Atualiza estudante
router.put('/estudante',function(req,res,next){
    const estudante = req.body;
    let uptEstudante = {};

    if(estudante.name){
        uptEstudante = req.body;
    }

    console.log(uptEstudante);

    Estudante.updateEstudante(uptEstudante,(err,_estudante) => {
        if(err) throw err;
        res.json(_estudante);
    })

    // if(!uptEstudante){
    //     res.status(400);
    //     res.json({"error":"Bad data"});
    // } else {
    //     Estudante.updateEstudante(uptEstudante,(err,estudante) => {
    //         if(err) throw err;
    //         res.json(estudante);
    //     })
    // }
})

router.delete('/estudante/:id',function(req,res,next){
    Estudante.removeEstudante({_id: req.params.id},(err,estudante) => {
        if(err) throw err;
        res.json(estudante);
    })
})

module.exports = router;
