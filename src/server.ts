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

app.use(express.static(__dirname + '/static', { dotfiles: 'allow' }))

//Getting Routes
//import routes here


//Router for testing
app.get('/', (req: Request, res: Response) => {
  res.json('System is running...');
});

//Start server on prod
// https
//   .createServer(
//     {
//       cert: fs.readFileSync('./certificate.crt'),
//       key: fs.readFileSync('./private.key'),
//       ca: fs.readFileSync('./ca_bundle.crt'),
//     },
//     app
//   )
//   .listen(443, () => {
//     console.log(`Server started on port ${process.env.PORT}`);
//   });

//start server on test
app.listen(80, () => {
  console.log('API Server started on port 80')
});