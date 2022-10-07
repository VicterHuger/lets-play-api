import { Router } from 'express';
import { eventLocalController } from '../controllers/eventLocalController';
import { tokenValidation } from '../middlewares/tokenValidation';
import { validateParam, validateParamId } from '../middlewares/validateParam';
import { validateSchema } from '../middlewares/validateSchema';
import { eventLocalAddressIdSchema, eventLocalSchema } from '../schemas/eventLocalSchema';
import { TypeEventLocalInsert } from '../types/eventLocalType';

const router: Router = Router();

router.post('/eventLocal/create', tokenValidation, validateSchema<TypeEventLocalInsert>(eventLocalSchema), eventLocalController.createEventLocal);

router.get('/eventLocal/address/:addressId', tokenValidation, validateParam<number>(eventLocalAddressIdSchema), eventLocalController.getEventLocalByAddressId);

router.get('/eventLocal/:id', tokenValidation, validateParamId, eventLocalController.getEventLocalById);

export default router;