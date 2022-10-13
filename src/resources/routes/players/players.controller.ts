import express from 'express'
let Players = global.Client.Players

const rPlayers = express.Router();

rPlayers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Players");
    console.log(Players)
});

export default rPlayers;