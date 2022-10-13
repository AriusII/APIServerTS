import express from 'express'
let Users = global.Client.Users

const rUsers = express.Router();

rUsers.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Users");
    console.log(Users)
});

export default rUsers;