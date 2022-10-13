import express from 'express'
const rUsers = express.Router()

rUsers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Users")
})

export default rUsers