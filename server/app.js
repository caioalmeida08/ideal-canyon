const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const aboutRouter = require('./routes/aboutRouter.js');
const buyRouter = require('./routes/buyRouter.js');
const loginRouter = require('./routes/loginRouter.js');
const registerRouter = require('./routes/registerRouter.js');
const scooterRouter = require('./routes/scooterRouter.js');
const addressRouter = require('./routes/addressRouter.js');
const contactRouter = require('./routes/contactRouter.js');

const os = require('os');
const ifaces = os.networkInterfaces();

const corsOptions = {
    origin: 'http://localhost:5000',
};

app.use(cors(corsOptions));

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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/sobre', aboutRouter);
app.use('/comprar', buyRouter);
app.use('/login', loginRouter);
app.use('/cadastrar', registerRouter);
app.use('/scooter', scooterRouter);
app.use('/endereco', addressRouter);
app.use('/contato', contactRouter)

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${ipAddress}:${PORT}`));
