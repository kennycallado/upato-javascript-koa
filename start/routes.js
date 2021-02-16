const Router = require('koa-router');
const UserController = require('../app/Controllers/UserController');

// Crea enrutador
const router = new Router({ prefix: '/users' });

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;
