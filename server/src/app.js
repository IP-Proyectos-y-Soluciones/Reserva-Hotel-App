import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import cors from 'cors';
import morgan from 'morgan';




const server = express();

// server.name = 'SERVER';

server.use( bodyParser.json( { limit: '50mb' } ) );
server.use( cookieParser() );
server.use( morgan( 'dev' ) );
server.use( json() );
server.use( cors() );


export default server;
