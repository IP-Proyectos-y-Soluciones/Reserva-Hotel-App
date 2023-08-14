import express, { json } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import bodyParser from 'body-parser'
import indexRoute from './routes/index.js';
import morgan from 'morgan';

// import('./config/db');

const server = express();

server.use( morgan( 'dev' ) );
server.use( json() );

const __dirname = dirname(fileURLToPath(import.meta.url));

server.set('views', join(__dirname, 'views'));
server.set('view engine', 'ejs');

const corsOptions = {
  origin: '*',
  methods: '*',
};

server.use( cors( corsOptions ) );
server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: false } ) );

server.use( ( req, res, next ) => {
  console.log( `${ req.url } -${ req.method }` );
  next();
});

server.use('/', indexRoute);
server.use(express.static(join(__dirname, 'public')));


export default server;
