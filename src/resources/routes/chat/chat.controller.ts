import express from 'express'
let Chat = global.Client.Chat

const rChat = express.Router();

rChat.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Chat");
    console.log(Chat)
});

export default rChat;