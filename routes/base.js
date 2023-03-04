const express = require('express');
const router = express.Router();

//Listar todas - filtrar titulo - Params: titulo, nome, cidade, tecnologias 
router.get('/', (req, res) => {
    res.send('Hello World');
})
//Listar uma - filtrar titulo - Params: titulo, nome, cidade, tecnologias
router.get('/:id', (req, res) => {
    res.send(req.params.id);
})
//Cadastrar nova base
router.post('/', (req, res) => {
})
//Atualizar cadastro
router.patch('/:id', (req, res) => {
})
//Deletar uma
router.delete('/:id', (req, res) => {
})

module.exports = router;
