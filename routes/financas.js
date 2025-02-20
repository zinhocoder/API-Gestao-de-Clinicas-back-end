const express = require('express');
const FinancaController = require('../controllers/FinancaController');

const router = express.Router();

/**
 * @swagger
 * /api/financas:
 *   post:
 *     summary: Cria uma nova finança
 *     tags: [Finanças]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *               valor:
 *                 type: number
 *               tipo:
 *                 type: string
 *                 enum: [receita, despesa]
 *               data:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Finança criada com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/', FinancaController.criarFinanca);

/**
 * @swagger
 * /api/financas:
 *   get:
 *     summary: Lista todas as finanças
 *     tags: [Finanças]
 *     responses:
 *       200:
 *         description: Lista de finanças
 *       400:
 *         description: Erro na requisição
 */
router.get('/', FinancaController.listarFinancas);

/**
 * @swagger
 * /api/financas/{id}:
 *   get:
 *     summary: Busca uma finança pelo ID
 *     tags: [Finanças]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Finança encontrada
 *       404:
 *         description: Finança não encontrada
 *       400:
 *         description: Erro na requisição
 */
router.get('/:id', FinancaController.buscarFinanca);

/**
 * @swagger
 * /api/financas/{id}:
 *   put:
 *     summary: Atualiza uma finança pelo ID
 *     tags: [Finanças]
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
 *               descricao:
 *                 type: string
 *               valor:
 *                 type: number
 *               tipo:
 *                 type: string
 *                 enum: [receita, despesa]
 *               data:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Finança atualizada com sucesso
 *       404:
 *         description: Finança não encontrada
 *       400:
 *         description: Erro na requisição
 */
router.put('/:id', FinancaController.atualizarFinanca);

/**
 * @swagger
 * /api/financas/{id}:
 *   delete:
 *     summary: Deleta uma finança pelo ID
 *     tags: [Finanças]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Finança deletada com sucesso
 *       404:
 *         description: Finança não encontrada
 *       400:
 *         description: Erro na requisição
 */
router.delete('/:id', FinancaController.deletarFinanca);

module.exports = router;