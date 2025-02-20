const express = require('express');
const ProntuarioController = require('../controllers/ProntuarioController');

const router = express.Router();

/**
 * @swagger
 * /api/prontuarios:
 *   post:
 *     summary: Cria um novo prontuário
 *     tags: [Prontuários]
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
 *               observacoes:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Prontuário criado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/', ProntuarioController.criarProntuario);

/**
 * @swagger
 * /api/prontuarios:
 *   get:
 *     summary: Lista todos os prontuários
 *     tags: [Prontuários]
 *     responses:
 *       200:
 *         description: Lista de prontuários
 *       400:
 *         description: Erro na requisição
 */
router.get('/', ProntuarioController.listarProntuarios);

/**
 * @swagger
 * /api/prontuarios/{id}:
 *   get:
 *     summary: Busca um prontuário pelo ID
 *     tags: [Prontuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prontuário encontrado
 *       404:
 *         description: Prontuário não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.get('/:id', ProntuarioController.buscarProntuario);

/**
 * @swagger
 * /api/prontuarios/{id}:
 *   put:
 *     summary: Atualiza um prontuário pelo ID
 *     tags: [Prontuários]
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
 *               observacoes:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Prontuário atualizado com sucesso
 *       404:
 *         description: Prontuário não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.put('/:id', ProntuarioController.atualizarProntuario);

/**
 * @swagger
 * /api/prontuarios/{id}:
 *   delete:
 *     summary: Deleta um prontuário pelo ID
 *     tags: [Prontuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Prontuário deletado com sucesso
 *       404:
 *         description: Prontuário não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.delete('/:id', ProntuarioController.deletarProntuario);

module.exports = router;