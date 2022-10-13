import express from 'express'
const rLogs = express.Router()

rLogs.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Logs")
})

export default rLogs