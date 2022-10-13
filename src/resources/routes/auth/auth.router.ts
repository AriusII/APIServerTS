import express from 'express'
const rAuth = express.Router()

rAuth.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Auth")
})

export default rAuth