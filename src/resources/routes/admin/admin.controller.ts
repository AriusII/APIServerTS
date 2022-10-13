import express from 'express'
let Admin = global.Client.Admin

const rAdmin = express.Router();

rAdmin.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Admin");
    console.log(Admin)
});

export default rAdmin;