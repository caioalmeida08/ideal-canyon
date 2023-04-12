const express = require('express');
const app = express();

// Torna a pasta "public" estática
app.use(express.static('public'));

// Definindo uma rota raiz
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
