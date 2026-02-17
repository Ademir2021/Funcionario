const express = require('express');
const path = require('path');

const app = express();

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'build')));

// Rota raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Rota catch-all para SPA ou rotas desconhecidas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Porta dinâmica do Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


