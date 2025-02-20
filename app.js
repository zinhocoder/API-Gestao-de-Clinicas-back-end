const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerSetup = require('./swagger');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do Swagger
swaggerSetup(app);

// Rotas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/agendamentos', require('./routes/agendamentos'));
app.use('/api/prontuarios', require('./routes/prontuarios'));
app.use('/api/estoque', require('./routes/estoque'));
app.use('/api/financas', require('./routes/financas'));

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Gestão de Clínicas');
});

module.exports = app;