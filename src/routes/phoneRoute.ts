import { Router } from 'express';
import { phoneController } from '../controllers/phoneController';
import { tokenValidation } from '../middlewares/tokenValidation';
import { validateSchema } from '../middlewares/validateSchema';
import phoneSchema from '../schemas/phoneSchema';
import { TypePhoneInsert } from '../types/phoneType';

const router: Router = Router();

router.post('/phone/create', tokenValidation, validateSchema<TypePhoneInsert>(phoneSchema), phoneController.createPhone);

router.get('/phone', tokenValidation, validateSchema<TypePhoneInsert>(phoneSchema), phoneController.getPhoneByNumber);

export default router;