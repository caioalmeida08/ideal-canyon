const express = require('express');
const app = express();
const sassMiddleware = require('node-sass-middleware');
const homeRouter = require('./routes/homeRouter.js');
const aboutRouter = require('./routes/aboutRouter.js');
const buyRouter = require('./routes/buyRouter.js');

const os = require('os');
const ifaces = os.networkInterfaces();

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
    debug: false,
    outputStyle: 'compressed',
}));

app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/sobre', aboutRouter);
app.use('/comprar', buyRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${ipAddress}:${PORT}`));
