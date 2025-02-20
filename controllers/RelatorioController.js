const { Financa } = require('../models');

exports.relatorioFinanceiro = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const financas = await Financa.findAll({
      where: {
        data: {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        },
      },
    });

    const receitas = financas.filter((f) => f.tipo === 'receita').reduce((acc, f) => acc + f.valor, 0);
    const despesas = financas.filter((f) => f.tipo === 'despesa').reduce((acc, f) => acc + f.valor, 0);
    const saldo = receitas - despesas;

    res.status(200).json({ receitas, despesas, saldo });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};