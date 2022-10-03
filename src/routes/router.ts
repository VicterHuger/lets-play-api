import { Router } from 'express';
import authRouter from './authRoute';
import photoRouter from './photoRoute';

const router: Router = Router();

router.use([authRouter, photoRouter])

export default router;