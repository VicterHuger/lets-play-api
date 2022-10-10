import { Router } from "express";
import { lobbyController } from "../controllers/lobbyController";
import { tokenValidation } from "../middlewares/tokenValidation";
import { validateParamId } from "../middlewares/validateParam";
import { validateSchema } from "../middlewares/validateSchema";
import { lobbyInsertSchema } from "../schemas/lobbySchema";
import { TypeLobbyInsert } from "../types/lobbyType";

const router: Router = Router();

router.post('/lobby/create', tokenValidation, validateSchema<TypeLobbyInsert>(lobbyInsertSchema), lobbyController.createLobby);

router.get('/lobby/:id', tokenValidation, validateParamId, lobbyController.getLobbyById)

export default router;