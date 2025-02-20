const { Financa } = require('../models');

exports.criarFinanca = async (req, res) => {
  try {
    const financa = await Financa.create(req.body);
    res.status(201).json(financa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listarFinancas = async (req, res) => {
  try {
    const financas = await Financa.findAll();
    res.status(200).json(financas);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.buscarFinanca = async (req, res) => {
  try {
    const financa = await Financa.findByPk(req.params.id);
    if (!financa) {
      return res.status(404).json({ error: 'Finança não encontrada' });
    }
    res.status(200).json(financa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.atualizarFinanca = async (req, res) => {
  try {
    const [updated] = await Financa.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const financa = await Financa.findByPk(req.params.id);
      return res.status(200).json(financa);
    }
    throw new Error('Finança não encontrada');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletarFinanca = async (req, res) => {
  try {
    const deleted = await Financa.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Finança não encontrada');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};