"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

var homeRouter = require('./routes/homeRouter.js');

var aboutRouter = require('./routes/aboutRouter.js');

var buyRouter = require('./routes/buyRouter.js');

var loginRouter = require('./routes/loginRouter.js');

var registerRouter = require('./routes/registerRouter.js');

var scooterRouter = require('./routes/scooterRouter.js');

var addressRouter = require('./routes/addressRouter.js');

var os = require('os');

var ifaces = os.networkInterfaces();
var ipAddress = null;
Object.keys(ifaces).forEach(function (ifname) {
  ifaces[ifname].forEach(function (iface) {
    if (iface.family === 'IPv4' && !iface.internal) {
      ipAddress = iface.address;
      return;
    }
  });

  if (ipAddress) {
    return;
  }
});
var corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express["static"]('public'));
app.use('/', homeRouter);
app.use('/sobre', aboutRouter);
app.use('/comprar', buyRouter);
app.use('/login', loginRouter);
app.use('/cadastrar', registerRouter);
app.use('/scooter', scooterRouter);
app.use('/endereco', addressRouter);
var PORT = 3000;
app.listen(PORT, function () {
  return console.log("Servidor rodando na porta ".concat(ipAddress, ":").concat(PORT));
});