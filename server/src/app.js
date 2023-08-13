import express, { json } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import indexRoute from './routes/index.js';
import morgan from 'morgan';

// import('./config/db');

const server = express();

// server.use( morgan( 'dev' ) );
// server.use( json() );
// server.use( cors() );

const __dirname = dirname(fileURLToPath(import.meta.url));

server.set('views', join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/', indexRoute);
server.use(express.static(join(__dirname, 'public')));


export default server;
