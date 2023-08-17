const server = require("./src/app");
const app = require("./src/app");
<<<<<<< HEAD
const { conn } = require("./src/db");
require("dotenv").config();
//import conn from "./src/config/db.js";
//import "dotenv/config";

server.set("port", process.env.PORT || 3001);
conn.sync({ force: true }).then(() => {
  server.listen(server.get("port"), () => {
    console.log("Server listening on port", server.get("port"));
  });
});
=======
require("dotenv").config();
const { conn } = require('./src/db');
server.set( 'port', process.env.PORT || 3001 );

conn.sync( { force: true } ).then( () => {
  server.listen(server.get("port"), () => {
    console.log("Server listening on port", server.get("port"));
  });
});
>>>>>>> 6b3d96a525363a5d3491920ddc19de95deff531a
