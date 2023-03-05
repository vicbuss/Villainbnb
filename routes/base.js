const express = require('express');
const router = express.Router();
const Base = require('../models/base');

//Listar todas - filtrar titulo - Params: titulo, nome, cidade, tecnologias 
router.get('/', async (req, res) => {
    try {
        const bases = await Base.find();
        res.json(bases); 
    } catch (erro) {
        res.status(500).json({ message: erro.message });
    }
})
//Listar uma - filtrar titulo - Params: titulo, nome, cidade, tecnologias
router.get('/:id', getBase, (req, res) => {
    res.json(res.base);
})
//Cadastrar nova base
router.post('/', async (req, res) => {
    const base = new Base({
        titulo: req.body.titulo,
        nomeFachada: req.body.nomeFachada,
        cidade: req.body.cidade,
        tecnologias: req.body.tecnologias
    })
    try {
        const novaBase = await base.save();
        res.status(201).json(novaBase);
    } catch (erro) {
        res.status(400).json({ message: erro.message })
    }
})
//Atualizar cadastro
router.put('/:id', getBase, async (req, res) => {
    res.base.titulo = req.body.titulo;
    res.base.nomeFachada = req.body.nomeFachada;
    res.base.cidade = req.body.cidade;
    res.base.tecnologias = req.body.tecnologias;
    try {
        const baseAtualizada = await res.base.save();
        res.json(baseAtualizada);
    } catch (erro) {
        res.status(400).json({ message: erro.message});
    }
})

//Deletar uma
router.delete('/:id', getBase, async (req, res) => {
    try {
        await res.base.deleteOne();
        res.json({ message: 'Base Destroyed' })
    } catch (erro) {
        res.status(500).json({ message: erro.message })
    }
})

async function getBase (req, res, next) {
    let base;
    try {
        base = await Base.findById(req.params.id);
        if (base == null) {
            return res.status(404).json({ message: 'Cannot find base' });
        }
    } catch (erro) {
        return res.status(500).json({ message: err.message });
    }
    res.base = base;
    next();
}

module.exports = router;
