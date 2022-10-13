import express from 'express'
const rAdmin = express.Router()

rAdmin.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Admin")
})

export default rAdmin