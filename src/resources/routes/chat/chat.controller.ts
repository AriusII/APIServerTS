import express from 'express'
let Client = global.Client

const rChat = express.Router();

rChat.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Chat");
    console.log(Client)
});

export default rChat;