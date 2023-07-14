import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { requireLogin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/test', requireLogin, testController)

export default router;
