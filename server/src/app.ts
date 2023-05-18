// Express imports
import express from 'express'
import { Router, Request, Response } from 'express';

// Network data
import ipAddresses from './lib/networkinterfaces';

// Server port
const PORT = 5000;

// Express app
const app = express();
const route = Router()

app.use(express.json())
route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)
app.listen(PORT, () => {
    console.clear();
    ipAddresses.forEach((ip) => {
        console.log(`Servidor rodando em: http://${ip}:${PORT}`);
    }
    )
})
