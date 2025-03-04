var express = require('express');
var router = express.Router();
const tarefas = require('../model/Task')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks' , {tarefas})
});



module.exports = router;
