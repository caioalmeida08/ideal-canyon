const express = require('express');
const app = express();
const sassMiddleware = require('node-sass-middleware');
const homeRouter = require('./routes/homeRouter.js');

const os = require('os');
const ifaces = os.networkInterfaces();

// Procura o primeiro endereço IPv4 não interno
let ipAddress = null;
Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname].forEach((iface) => {
        if (iface.family === 'IPv4' && !iface.internal) {
            ipAddress = iface.address;
            return;
        }
    });
    if (ipAddress) {
        return;
    }
});

app.use(sassMiddleware({
    src: __dirname,
    dest: __dirname + '/public/',
    force: true,
    debug: true,
    outputStyle: 'compressed',
}));

app.use(express.static('public'));

app.use('/', homeRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${ipAddress}:${PORT}`));
