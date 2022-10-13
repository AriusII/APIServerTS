import express from 'express'
let Client = global.Client

const rLogs = express.Router();

rLogs.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Logs");
    console.log(Client)
});

export default rLogs;