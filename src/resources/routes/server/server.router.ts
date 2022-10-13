import express from 'express'
const rServer = express.Router()

rServer.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Server")
})

rServer.get('/authorized', async (req: express.Request, res: express.Response) => {
    const resp = await gClient.Server.getAuthorized()
    res.send(resp)
})

rServer.get('/config', async (req: express.Request, res: express.Response) => {
    const resp = await gClient.Server.getConfig()
    res.send(resp)
})

rServer.get('/info', async (req: express.Request, res: express.Response) => {
    const resp = await gClient.Server.getInfo()
    res.send(resp)
})

rServer.get('/stat', async (req: express.Request, res: express.Response) => {
    const resp = await gClient.Server.getStats()
    res.send(resp)
})

rServer.get('/test', async (req: express.Request, res: express.Response) => {
    console.log(gClient)
})

export default rServer