import Express from 'express';
import {
    createUsers,
    findAllUsers,
    findUsersByID,
    updateUsersbyID,
    deleteUsers
} from "../controllers/userController.js"

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Express.Router();

router.post("/create/newUser", createUsers);
router.get("/read/findOne/:userID", findUsersByID);
router.patch("/update/:userID", updateUsersbyID);
router.delete("/deleteUser/:userID", deleteUsers);
router.get("/findAll", findAllUsers);


// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export { router }
