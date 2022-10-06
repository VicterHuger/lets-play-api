import { Router } from "express";
import { addressController } from "../controllers/addressController";
import { tokenValidation } from "../middlewares/tokenValidation";
import { validateSchema } from "../middlewares/validateSchema";
import addressSchema from "../schemas/addressSchema";
import { IAddressSchema } from "../types/addressType";

const router: Router = Router();

router.post('/address/create', tokenValidation, validateSchema<IAddressSchema>(addressSchema), addressController.createAddress);

export default router;