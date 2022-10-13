import express from 'express'
let Client = global.Client

const rUsers = express.Router();

rUsers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Users");
    console.log(Client)
});

export default rUsers;