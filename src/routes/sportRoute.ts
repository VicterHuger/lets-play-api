import { Router } from 'express';
import { tokenValidation } from '../middlewares/tokenValidation';
import { sportController } from '../controllers/sportController';

const router: Router = Router();

router.get('/sports', tokenValidation, sportController.listAllSports);

export default router;