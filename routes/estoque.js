const express = require('express');
const EstoqueController = require('../controllers/EstoqueController');

const router = express.Router();

/**
 * @swagger
 * /api/estoque:
 *   post:
 *     summary: Cria um novo item no estoque
 *     tags: [Estoque]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               item:
 *                 type: string
 *               quantidade:
 *                 type: integer
 *               dataValidade:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Item criado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/', EstoqueController.criarItemEstoque);

/**
 * @swagger
 * /api/estoque:
 *   get:
 *     summary: Lista todos os itens do estoque
 *     tags: [Estoque]
 *     responses:
 *       200:
 *         description: Lista de itens do estoque
 *       400:
 *         description: Erro na requisição
 */
router.get('/', EstoqueController.listarItensEstoque);

/**
 * @swagger
 * /api/estoque/{id}:
 *   get:
 *     summary: Busca um item do estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.get('/:id', EstoqueController.buscarItemEstoque);

/**
 * @swagger
 * /api/estoque/{id}:
 *   put:
 *     summary: Atualiza um item do estoque pelo ID
 *     tags: [Estoque]
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
 *               item:
 *                 type: string
 *               quantidade:
 *                 type: integer
 *               dataValidade:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso
 *       404:
 *         description: Item não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.put('/:id', EstoqueController.atualizarItemEstoque);

/**
 * @swagger
 * /api/estoque/{id}:
 *   delete:
 *     summary: Deleta um item do estoque pelo ID
 *     tags: [Estoque]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Item deletado com sucesso
 *       404:
 *         description: Item não encontrado
 *       400:
 *         description: Erro na requisição
 */
router.delete('/:id', EstoqueController.deletarItemEstoque);

module.exports = router;