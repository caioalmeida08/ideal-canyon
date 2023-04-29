const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const homeRouter = require('./routes/homeRouter.js');
const aboutRouter = require('./routes/aboutRouter.js');
const buyRouter = require('./routes/buyRouter.js');
const loginRouter = require('./routes/loginRouter.js');
const registerRouter = require('./routes/registerRouter.js');
const scooterRouter = require('./routes/scooterRouter.js');
const addressRouter = require('./routes/addressRouter.js');

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

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/sobre', aboutRouter);
app.use('/comprar', buyRouter);
app.use('/login', loginRouter);
app.use('/cadastrar', registerRouter);
app.use('/scooter', scooterRouter);
app.use('/endereco', addressRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${ipAddress}:${PORT}`));
