import { Router } from 'express';
import { photoController } from '../controllers/photoController';
import { tokenValidation } from '../middlewares/tokenValidation';
import { validateSchema } from '../middlewares/validateSchema';
import photoSchema from '../schemas/photoSchema';
import { TypePhotoInsert } from '../types/photoType';

const router: Router = Router();

router.post('/photo/create', tokenValidation, validateSchema<TypePhotoInsert>(photoSchema), photoController.createPhoto);

export default router;