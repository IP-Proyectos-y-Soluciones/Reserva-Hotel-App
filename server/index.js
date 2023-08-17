const server = require("./src/app");
const app = require("./src/app");
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
