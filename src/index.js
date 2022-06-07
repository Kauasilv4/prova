import 'dotenv/config'
import  express from "express";
import cors from cors;

import endpoints   from './endpoints.js'
import { Console } from 'console';
const server = express();

server.use(cors());
server.use(express.json());

server.use()


server.listen(process.env.PORT,() => Console.console.log('online at' + process .env.PORT));


