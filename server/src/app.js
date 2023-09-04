const express = require( "express" );
const RateLimit = require( 'express-rate-limit' ); // Implementar la limitación de velocidad o "rate limiting" en las solicitudes HTTP
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
// const SessionStore = require('express-session-sequelize')(expressSession.Store); // Conexion con la DB via sequelize - Login Session
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const indexRouter = require("./routes");
// require("dotenv").config();
// const { DATABASE } = process.env;  // Variable de entorno para conexion a DB
require('./config/db');

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

// Configurar el limitador de velocidad: máximo de cinco solicitudes por minuto
const limiter = RateLimit( {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limitar cada IP a 100 solicitudes por ventana
} );

// Aplicar limitador de tasa a todas las solicitudes
server.use( limiter );

server.use( morgan( 'dev' ) );
server.use( express.json() );

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.set('upload', path.join(__dirname, 'uploads'));

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
server.use(express.static(path.join(__dirname, 'uploads')));


module.exports = server;
