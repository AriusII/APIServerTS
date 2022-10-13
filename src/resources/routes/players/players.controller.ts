import express from 'express'
let Client = global.Client

const rPlayers = express.Router();

rPlayers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Players");
    console.log(Client)
});

export default rPlayers;