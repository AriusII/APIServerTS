import express from 'express'
let Server = global.Client.Server

const rServer = express.Router();

rServer.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Server");
    console.log(Server)
});

export default rServer;