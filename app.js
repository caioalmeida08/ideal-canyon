const express = require('express');
const app = express();
const sassMiddleware = require('node-sass-middleware');
const homeRouter = require('./routes/homeRouter.js');


app.use(sassMiddleware({
    src: __dirname,
    dest: __dirname + '/public/',
    force: true,
    debug: true,
    outputStyle: 'compressed',
}));

app.use(express.static('public'));

app.use('/', homeRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
