const mongoose = require('mongoose');

const TaksSchema = new mongoose.Schema({
    tarefa:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    inserido:{
        type: Date,
        default: Date.now
    },
    prazo:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('tarefas', TaksSchema);
