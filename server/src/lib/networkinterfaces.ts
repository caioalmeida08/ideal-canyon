import Os  from 'os';

// Reading network interfaces and showing them
const ifaces = Os.networkInterfaces();
const networkInterfaces = Object.values(ifaces).map((iface) =>{
    // iface is an array of objects/interfaces
    // index 0 of each element is its mac address
    // index 1 of each element is its ip address
    
    return iface?.[1]?.address;
})

export default networkInterfaces;