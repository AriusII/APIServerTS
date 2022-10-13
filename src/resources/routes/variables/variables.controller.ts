import express from 'express'
const rVariables = express.Router()

rVariables.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Variables")
})

export default rVariables