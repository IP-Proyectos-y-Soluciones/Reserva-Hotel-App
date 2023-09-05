const express = require ("express");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
// const SessionStore = require('express-session-sequelize')(expressSession.Store); // Conexion con la DB via sequelize - Login Session
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const indexRouter = require("./routes");
require("dotenv").config();
// const { DATABASE } = process.env;  // Variable de entorno para conexion a DB
require=('./config/db');

// Conexion con el Server Remoto de la DB
// const { config } = require( 'dotenv' );
// const pg = require( 'pg' );
// const DB_INTERNAL_URL = process.env;

// Conexion con la DB via sequelize - Login Session
// const sequelizeSessionStore = new SessionStore({
//   db: `${DATABASE}`,
// });

// config();
const server = express();

server.use( morgan( 'dev' ) );
server.use( express.json() );

//:::::::::::AGREGADO X::::::::::::::::::::::::::::
server.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(expressSession({
  secret: process.env.AUTHENTICATION_SECRET, // Cambia esto por una cadena de secreto segura
  resave: false,
  saveUninitialized: true
}));

//:::::::::::FIN AGREGADO X::::::::::::::::::::::::::::

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.set('upload', path.join(__dirname, 'public/uploads'));

// Conexion con el Server Remoto de la DB
// new pg.Pool({
//   connectionString:  DB_INTERNAL_URL,
// });

server.use( cors() );
server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: false } ) );
server.use( cookieParser() );

// Login Express Session
// server.use( expressSession({
//   secret: 'keep it secret, keep it safe.',
//   store: sequelizeSessionStore,
//   resave: false,
//   saveUninitialized: false,
// }));

server.use( ( req, res, next ) => {
  console.log( `${ req.url } -${ req.method }` );
  next();
});

server.use('/', indexRouter);
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'public/uploads')));


module.exports = server;
