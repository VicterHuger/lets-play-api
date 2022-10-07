import { Router } from "express";
import { lobbyController } from "../controllers/lobbyController";
import { tokenValidation } from "../middlewares/tokenValidation";
import { validateSchema } from "../middlewares/validateSchema";
import { lobbyInsertSchema } from "../schemas/lobbySchema";
import { TypeLobbyInsert } from "../types/lobbyType";

const router: Router = Router();

router.post('/lobby/create', tokenValidation, validateSchema<TypeLobbyInsert>(lobbyInsertSchema), lobbyController.createLobby)

export default router;