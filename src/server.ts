import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from 'express'
import cors from 'cors'
import https from 'https'
import fs from 'fs'

//Get express and set it to app
const app = express();

// parse requests of content-type - application/json
app.use(express.json({ limit: '25mb' }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

app.use(cors());

//Getting Routes
//import routes here


//Start server on prod
https.createServer({
    cert: fs.readFileSync(`${__dirname}/ssl/cert.crt`),
    key: fs.readFileSync(`${__dirname}/ssl/cert.key`),
    ca: fs.readFileSync(`${__dirname}/ssl/ca.crt`),
}, app).listen(443, () => {
    console.log(`Server started on port 443`);
})