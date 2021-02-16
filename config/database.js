const { createConnection } = require('typeorm');

if(process.env.DATABASE_URL) {
  createConnection({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: ['database/Entities/*.js'],
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    }
  })
} else if (process.env.TYPEORM_CONNECTION) {
  createConnection();
} else {
  console.log('Error, there is no config to connect.');
}
