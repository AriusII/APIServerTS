import express from 'express'
const rPlayers = express.Router()

rPlayers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Players")
})

rPlayers.get('/pinfo/:user', async (req: express.Request, res: express.Response) => {
    const user = req.params.user
    console.log(user)
    const resp = await gClient.Players.playerLookup(user)
    res.send(resp)
})

rPlayers.get('/listing', (req: express.Request, res: express.Response) => {
    gClient.Players.playersList(0,10,10).
    then((resp) => {
        res.send(resp)
    })
})

export default rPlayers