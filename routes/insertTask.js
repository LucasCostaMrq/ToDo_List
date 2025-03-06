var express = require('express');
var router = express.Router();
const Task = require('../model/Task');

router.get('/', function(req, res, next) {
  res.render('insert');
});

router.post('/add', async(req, res) =>{
    try{
        const {tarefa, descricao, inserido, prazo} = req.body
    
        const novaTarefa = new Task({
            tarefa,
            descricao,
            inserido,
            prazo    
        });
        await novaTarefa.save();
        res.redirect('/Task');
    }
    catch(error){
        res.status(500).send("Erro ao adicionar a tarefa" + error.message);
    }
});
    

module.exports = router