import { App } from "./app"

// Server port
const PORT = 5000;

// Start server
new App().server.listen(PORT);

// Server ip addresses
import networkInterfaces from "./lib/networkinterfaces"; 
for (const ipAddress of networkInterfaces){
    console.log(`Servidor rodando em http://${ipAddress}:${PORT}`);
}