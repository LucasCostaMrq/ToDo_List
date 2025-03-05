var express = require('express');
var router = express.Router();
const Tarefas = require('../model/Task')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
      const tarefas = await Tarefas.find(); // Busca todas as tarefas no MongoDB
      res.render('tasks', { tarefas }); // Passa as tarefas para a view
  } 
  catch (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar tarefas");
  }
});



module.exports = router;
