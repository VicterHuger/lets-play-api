import { Router } from 'express';
import authRouter from './authRoute';
import addressRouter from './addressRoute';
import photoRouter from './photoRoute';
import phoneRouter from './phoneRoute';

const router: Router = Router();

router.use([authRouter, addressRouter, photoRouter, phoneRouter])

export default router;