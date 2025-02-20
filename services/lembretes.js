const cron = require('node-cron');
const transporter = require('../config/email');
const { Agendamento } = require('../models');

// Agendamento diário para verificar lembretes
cron.schedule('0 8 * * *', async () => { // Executa todos os dias às 8h
  try {
    const agendamentos = await Agendamento.findAll({
      where: {
        data: new Date(new Date().setDate(new Date().getDate() + 1)), // Agendamentos para o dia seguinte
      },
    });

    agendamentos.forEach((agendamento) => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: agendamento.pacienteEmail, // Supondo que o e-mail do paciente esteja no modelo
        subject: 'Lembrete de Agendamento',
        text: `Você tem um agendamento marcado para amanhã às ${agendamento.data}.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Erro ao enviar e-mail:', error);
        } else {
          console.log('E-mail enviado:', info.response);
        }
      });
    });
  } catch (err) {
    console.error('Erro ao buscar agendamentos:', err);
  }
});