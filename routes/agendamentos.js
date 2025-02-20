const express = require('express');
const AgendamentoController = require('../controllers/AgendamentoController');

const router = express.Router();

/**
 * @swagger
 * /api/agendamentos:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Agendamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pacienteId:
 *                 type: integer
 *               medicoId:
 *                 type: integer
 *               data:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/', AgendamentoController.criarAgendamento);

/**
 * @swagger
 * /api/agendamentos:
 *   get:
 *     summary: Lista todos os agendamentos
 *     tags: [Agendamentos]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 *       400:
 *         description: Erro na requisição
 */
router.get('/', AgendamentoController.listarAgendamentos);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   get:
 *     summary: Busca um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Agendamento encontrado
 *       404:
 *         description: Agendamento não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.get('/:id', AgendamentoController.buscarAgendamento);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   put:
 *     summary: Atualiza um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pacienteId:
 *                 type: integer
 *               medicoId:
 *                 type: integer
 *               data:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agendamento atualizado com sucesso
 *       404:
 *         description: Agendamento não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.put('/:id', AgendamentoController.atualizarAgendamento);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   delete:
 *     summary: Deleta um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Agendamento deletado com sucesso
 *       404:
 *         description: Agendamento não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.delete('/:id', AgendamentoController.deletarAgendamento);

module.exports = router;