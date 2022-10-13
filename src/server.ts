// Init pre-base
import dotenv from 'dotenv'
dotenv.config()
import https from 'https'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)

// Init base
import cors from 'cors'
import express from 'express'

// Init intersect package
import { Client, initToken } from '@ariusii/intersect.ts'

const token = await initToken('http://127.0.0.1', <string>process.env.PORT, <string>process.env.USER, <string>process.env.PASSWORD)
const ieClient = new Client("http://127.0.0.1", <string>process.env.PORT, token.access_token, token.refresh_token, 840000)

declare global {
    var gClient: Client
}

global.gClient = ieClient


// Get express and set it to app
const app = express()

// const corsOptions = {
//  origin: "*",
//  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// setup cors
app.use(cors())

// parse requests of content-type - application/json
app.use(express.json({ limit: '25mb' }))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '25mb' }))

//Getting Routes || import routes here
import rAdmin from './resources/routes/admin/admin.controller.js'
import rAuth from './resources/routes/auth/auth.controller.js'
import rChat from './resources/routes/chat/chat.controller.js'
import rGameObjects from './resources/routes/gameobjects/gameobjects.controller.js'
import rLogs from './resources/routes/logs/logs.controller.js'
import rPlayers from './resources/routes/players/players.controller.js'
import rServer from './resources/routes/server/server.controller.js'
import rUsers from './resources/routes/users/users.controller.js'
import rVariables from './resources/routes/variables/variables.controller.js'

//Use Routes here
app.use('/admin', rAdmin)
app.use('/auth', rAuth)
app.use('/chat', rChat)
app.use('/gameobjects', rGameObjects)
app.use('/logs', rLogs)
app.use('/players', rPlayers)
app.use('/server', rServer)
app.use('/users', rUsers)
app.use('/variables', rVariables)

//Start server on prod
https.createServer({
    cert: fs.readFileSync(`${__dirname}/ssl/localhostcrt.pem`),
    key: fs.readFileSync(`${__dirname}/ssl/localhostkey.pem`),
}, app).listen(443, () => { console.log(`Server started on port 443`)})