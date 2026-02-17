const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos estáticos da build
// app.use(express.static(path.join(__dirname, 'build')));

// Todas as rotas vão para index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/', (req, res) => {
  res.send('Olá! Seu servidor Node e Express está funcionando.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

