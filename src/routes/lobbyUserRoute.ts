import { Router } from "express";
import { lobbyUserController } from "../controllers/lobbyUserController";
import { tokenValidation } from "../middlewares/tokenValidation";
import { validateParam } from "../middlewares/validateParam";
import { lobbyUserSchemaInsert } from "../schemas/lobbyUserSchema";


const router: Router = Router();

router.post('/lobbyUser/create/:lobbyId', tokenValidation, validateParam<number>(lobbyUserSchemaInsert), lobbyUserController.createLobbyUser)

export default router;