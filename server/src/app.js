const express = require ("express")
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const indexRouter = require("./routes");

const server = express();

server.use( morgan( 'dev' ) );
server.use( express.json() );

server.set('views', path.join(__dirname, 'views'));
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

server.use('/', indexRouter);
server.use(express.static(path.join(__dirname, 'public')));



module.exports = server;
