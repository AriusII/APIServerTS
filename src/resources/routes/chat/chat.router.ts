import express from 'express'
const rChat = express.Router()

rChat.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Chat")
})

export default rChat