const { Estoque } = require('../models');

exports.criarItemEstoque = async (req, res) => {
  try {
    const item = await Estoque.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listarItensEstoque = async (req, res) => {
  try {
    const itens = await Estoque.findAll();
    res.status(200).json(itens);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.buscarItemEstoque = async (req, res) => {
  try {
    const item = await Estoque.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.atualizarItemEstoque = async (req, res) => {
  try {
    const [updated] = await Estoque.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const item = await Estoque.findByPk(req.params.id);
      return res.status(200).json(item);
    }
    throw new Error('Item não encontrado');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletarItemEstoque = async (req, res) => {
  try {
    const deleted = await Estoque.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Item não encontrado');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};