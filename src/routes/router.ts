import { Router } from 'express';
import authRouter from './authRoute';
import addressRouter from './addressRoute';
import photoRouter from './photoRoute';
import phoneRouter from './phoneRoute';
import profileRouter from './profileRoute';

const router: Router = Router();

router.use([authRouter, addressRouter, photoRouter, phoneRouter, profileRouter])

export default router;