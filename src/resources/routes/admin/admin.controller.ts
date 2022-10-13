import express from 'express'
let Client = global.Client

const rAdmin = express.Router();

rAdmin.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Admin");
    console.log(Client)
});

export default rAdmin;