import server from './src/app.js';
// import { conn } from "./src/config/db";
import 'dotenv/config'
const { PORT } = process.env;

// conn.sync( { force: true } ).then( () => {
  server.listen( PORT, () => {
    console.log( `%s listening at ${ PORT }` );
  });
// });