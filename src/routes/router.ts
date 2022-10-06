import { Router } from 'express';
import authRouter from './authRoute';
import addressRouter from './addressRoute';
import photoRouter from './photoRoute';
import phoneRouter from './phoneRoute';
import profileRouter from './profileRoute';
import sportRouter from './sportRoute';

const router: Router = Router();

router.use([authRouter, addressRouter, photoRouter, phoneRouter, profileRouter, sportRouter])

export default router;