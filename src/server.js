const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./utils/mongo');


const PORT = 5000;

const server = http.createServer(app);

async function startServer(){
    await mongoConnect();
    server.listen(PORT, ()=>{
        console.log(`Starting server on port ${PORT}`);
    });
}

startServer();