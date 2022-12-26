import express from 'express';

const server = express();

server.use(express.json());
console.log('teste');

server.listen(3000, () => console.log('Server is running'));
