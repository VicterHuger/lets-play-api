import { Router } from 'express';
import { profileController } from '../controllers/profileController';
import { tokenValidation } from '../middlewares/tokenValidation';
import { validateParamId } from '../middlewares/validateParam';
import { validateSchema } from '../middlewares/validateSchema';
import { profileSchema, profileUpdateSchema } from '../schemas/profileSchema';
import { TypeProfileInsert, TypeProfileUpdate } from '../types/profileType';

const router: Router = Router();

router.post('/profile/create', tokenValidation, validateSchema<TypeProfileInsert>(profileSchema), profileController.createProfile);

router.patch('/profile/:id', tokenValidation, validateSchema<TypeProfileUpdate>(profileUpdateSchema), validateParamId, profileController.updateProfile)

export default router;