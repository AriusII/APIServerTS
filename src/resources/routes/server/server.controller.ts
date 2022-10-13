import express from 'express'
const rServer = express.Router()

rServer.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Server")
})

rServer.get('/stats', async (req: express.Request, res: express.Response) => {
    let stats = await gClient.Server.getStats()
    res.send(stats)
})

export default rServer