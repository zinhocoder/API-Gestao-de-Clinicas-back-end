const { Prontuario } = require('../models');

exports.criarProntuario = async (req, res) => {
  try {
    const prontuario = await Prontuario.create(req.body);
    res.status(201).json(prontuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listarProntuarios = async (req, res) => {
  try {
    const prontuarios = await Prontuario.findAll();
    res.status(200).json(prontuarios);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.buscarProntuario = async (req, res) => {
  try {
    const prontuario = await Prontuario.findByPk(req.params.id);
    if (!prontuario) {
      return res.status(404).json({ error: 'Prontuário não encontrado' });
    }
    res.status(200).json(prontuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.atualizarProntuario = async (req, res) => {
  try {
    const [updated] = await Prontuario.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const prontuario = await Prontuario.findByPk(req.params.id);
      return res.status(200).json(prontuario);
    }
    throw new Error('Prontuário não encontrado');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletarProntuario = async (req, res) => {
  try {
    const deleted = await Prontuario.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Prontuário não encontrado');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};