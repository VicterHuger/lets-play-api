import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { TypeUserSingUp } from "../types/userTypes";
import signUpSchema from "../schemas/signUpSchema";
import { authController } from '../controllers/authController';


const router: Router = Router();

router.post('/sign-up', validateSchema<TypeUserSingUp>(signUpSchema), authController.createUser);

export default router;