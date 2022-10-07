import { Router } from 'express';
import authRouter from './authRoute';
import addressRouter from './addressRoute';
import eventLocalRouter from './eventLocalRoute';
import lobbyRouter from './lobbyRoute';
import photoRouter from './photoRoute';
import phoneRouter from './phoneRoute';
import profileRouter from './profileRoute';
import sportRouter from './sportRoute';

const router: Router = Router();

router.use([authRouter, addressRouter, eventLocalRouter, lobbyRouter, photoRouter, phoneRouter, profileRouter, sportRouter])

export default router;