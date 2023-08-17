const server = require("./src/app");
const app = require("./src/app");
require("dotenv").config();
const { conn } = require('./src/db');
server.set( 'port', process.env.PORT || 3001 );

conn.sync( { force: true } ).then( () => {
  server.listen(server.get("port"), () => {
    console.log("Server listening on port", server.get("port"));
  });
});