const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRouter.js');

app.use(express.static('public'));

app.use('/', homeRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
