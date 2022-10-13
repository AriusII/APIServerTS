import express from 'express'
let Auth = global.Client.Auth

const rAuth = express.Router();

rAuth.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Auth");
    console.log(Auth)
});

export default rAuth;