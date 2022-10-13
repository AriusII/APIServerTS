import express from 'express'
let Client = global.Client

const rAuth = express.Router();

rAuth.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Auth");
    console.log(Client)
});

export default rAuth;