import express from 'express'
let Client = global.Client

const rVariables = express.Router();

rVariables.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Variables");
    console.log(Client)
});

export default rVariables;