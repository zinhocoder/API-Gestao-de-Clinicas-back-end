const { Agendamento } = require('../models');

exports.criarAgendamento = async (req, res) => {
  try {
    const agendamento = await Agendamento.create(req.body);
    res.status(201).json(agendamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listarAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();
    res.status(200).json(agendamentos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.buscarAgendamento = async (req, res) => {
  try {
    const agendamento = await Agendamento.findByPk(req.params.id);
    if (!agendamento) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }
    res.status(200).json(agendamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.atualizarAgendamento = async (req, res) => {
  try {
    const [updated] = await Agendamento.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const agendamento = await Agendamento.findByPk(req.params.id);
      return res.status(200).json(agendamento);
    }
    throw new Error('Agendamento não encontrado');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletarAgendamento = async (req, res) => {
  try {
    const deleted = await Agendamento.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Agendamento não encontrado');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};