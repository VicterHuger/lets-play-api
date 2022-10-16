import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { TypeUserSingUp, TypeUserSingIn } from "../types/userTypes";
import signUpSchema from "../schemas/signUpSchema";
import signInSchema from "../schemas/signInSchema";
import { authController } from '../controllers/authController';


const router: Router = Router();

router.post('/sign-up', validateSchema<TypeUserSingUp>(signUpSchema), authController.createUser);

router.post('/sign-in', validateSchema<TypeUserSingIn>(signInSchema), authController.singInUser);

export default router;