import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import testCtrl from '../controllers/testCtrl'

const router = Router();

router.get('/', indexCtrl);
router.get('/test', testCtrl);

export default router