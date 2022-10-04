import { Router } from 'express';
import authRouter from './authRoute';
import photoRouter from './photoRoute';
import phoneRouter from './phoneRoute';

const router: Router = Router();

router.use([authRouter, photoRouter, phoneRouter])

export default router;