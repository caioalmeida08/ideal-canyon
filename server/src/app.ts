// Express imports
import express from 'express'
import { Router, Request, Response } from 'express';

// Network data
import ipAddresses from './lib/networkinterfaces';

// Import routers
import { router as scooterRouter } from './routers/scooterRouter';

// Server port
const PORT = 5000;

// Express app
const app = express();

// Routers
app.use('/scooter', scooterRouter);

// List IP addresses
app.listen(PORT, () => {
    console.clear();
    ipAddresses.forEach((ip) => {
        console.log(`Servidor rodando em: http://${ip}:${PORT}`);
    }
    )
})
