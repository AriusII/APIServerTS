import express from 'express'
const rPlayers = express.Router()

rPlayers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Players")
})

export default rPlayers