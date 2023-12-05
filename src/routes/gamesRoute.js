import Express from 'express';
import {
    createGames,
    findAllGames,
    findGamesByID,
    updateGamesbyID,
    deleteGames
} from "../controllers/gamesControllers.js"

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Express.Router();

router.post("/create/newGame", createGames);
router.get("/read/findOne/:gamesID", findGamesByID);
router.patch("/update/:gamesID", updateGamesbyID);
router.delete("/deleteGame/:gamesID", deleteGames);
router.get("/findAll", findAllGames);
// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export { router }
