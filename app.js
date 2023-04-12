const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRouter.js');

// Torna a pasta "public" estática
app.use(express.static('public'));

// Redireciona pedidos ao link raiz para o router homeRouter
app.use('/', homeRouter);

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
