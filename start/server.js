// Librerías requeridas
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

// Módulos de la aplicación requeridos
const router = require('./routes')
require('../config/database')

// Declara puerto
const PORT = process.env.PORT || 3333;

// Crea aplicación
const app = new Koa();

// Server Middleware
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

// Servidor a la escucha
app.listen(PORT, () => {
  console.log('Server listening on por: ', PORT);
});
