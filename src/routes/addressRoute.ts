import { Router } from "express";
import { addressController } from "../controllers/addressController";
import { tokenValidation } from "../middlewares/tokenValidation";
import { validateSchema } from "../middlewares/validateSchema";
import { addressSchemaCreate, AddressSchemaGet } from "../schemas/addressSchema";
import { IAddressSchema, TypeAdressSchema } from "../types/addressType";

const router: Router = Router();

router.post('/address/create', tokenValidation, validateSchema<IAddressSchema>(addressSchemaCreate), addressController.createAddress);

export default router;