const Router = require('koa-router');

// Crea enrutador
const router = new Router();

router.get('/', ({ response }) => {
  response.body = 'Hello from routes';
});

module.exports = router;
