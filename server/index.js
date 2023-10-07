const server = require("./src/app");
const app = require("./src/app");
const { conn } = require("./src/config/db");
const createDefaultAdmin = require("./src/config/initialSetup");
require("dotenv").config();


server.set("port", process.env.PORT || 3001);
conn.sync({ force: false}).then(() => {
  server.listen(server.get("port"), () => {
    console.log("Server listening on port", server.get("port"));
  });
});
