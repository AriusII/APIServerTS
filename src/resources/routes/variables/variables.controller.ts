import express from 'express'
let Variables = global.Client.Variables

const rVariables = express.Router();

rVariables.get('/', (req: express.Request, res: express.Response) => {
    res.send("Index of Variables");
    console.log(Variables)
});

export default rVariables;