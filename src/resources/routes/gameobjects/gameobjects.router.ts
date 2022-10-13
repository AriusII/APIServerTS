import express from 'express'
const rGameObjects = express.Router()

rGameObjects.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of GameObjects")
})

export default rGameObjects