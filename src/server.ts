// Init pre-base
import dotenv from 'dotenv'
dotenv.config()
import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)

// Init base
import cors from 'cors'
import express from 'express'

// init intersect package
import { Client, initToken } from '@ariusii/intersect.ts'

const token = await initToken(
  'http://127.0.0.1',
  <string>process.env.PORT,
  <string>process.env.USER,
  <string>process.env.PASSWORD
)

console.log(token)
const client = new Client(
  'http://127.0.0.1',
  <string>process.env.PORT,
  token.access_token,
  token.refresh_token,
  840000
)

//Get express and set it to app
const app = express()

// setup cors
app.use(cors())

// parse requests of content-type - application/json
app.use(express.json({ limit: '25mb' }))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '25mb' }))

//Getting Routes
//import routes here

//Start server on prod
https
  .createServer(
    {
      cert: fs.readFileSync(`${__dirname}/ssl/localhost.pem`),
      key: fs.readFileSync(`${__dirname}/ssl/localhost-key.pem`),
    },
    app
  )
  .listen(443, () => {
    console.log(`Server started on port 443`)
  })
