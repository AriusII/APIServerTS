import express from 'express'
let Client = global.Client

const rGameObjects = express.Router();

rGameObjects.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of GameObjects");
    console.log(Client)
});

export default rGameObjects;