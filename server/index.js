import server from './src/app';
import 'dotenv/config';
import { conn } from './src/config/db';

import express from 'express';

server.set('port', process.env.PORT || 3001);

conn.sync({ force: true }) 
  .then(() => { 
    console.log('DB created successfully'); 
    server.listen(server.get('port'), () => { 
      console.log('Server listening on port', server.get('port')); 
    }); 
  }).catch((error) => { 
  console.log('Error creating DB tables:', error); 
});
