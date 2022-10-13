import express from 'express'
const rUsers = express.Router()

rUsers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Users")
})

rUsers.get('/uinfo/:user', async (req: express.Request, res: express.Response) => {
    const user = req.params.user
    console.log(user)
    gClient.Users.userLookup(user).then((resp) => {
        res.send(resp)
    })
})

rUsers.get('/listing', async (req: express.Request, res: express.Response) => {
    const anw = await gClient.Users.usersList(1,10,10)
    res.send(anw)
})

export default rUsers