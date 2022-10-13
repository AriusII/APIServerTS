import express from 'express'
let GameObjects = global.Client.GameObjects

const rGameObjects = express.Router();

rGameObjects.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of GameObjects");
    console.log(GameObjects)
});

export default rGameObjects;