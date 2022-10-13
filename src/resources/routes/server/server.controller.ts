import express from 'express'
let Client = global.Client

const rServer = express.Router();

rServer.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Server");
    console.log(Client)
});

export default rServer;