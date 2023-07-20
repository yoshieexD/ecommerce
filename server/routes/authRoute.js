import express from "express";
import { registerController, loginController, testController, forgotPasswordController } from "../controllers/authController.js";
import { isAdmin, requireLogin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/test', requireLogin, isAdmin, testController)

//Protected user route auth
router.get('/user-auth', requireLogin, (req, res) => {
    res.status(200).send({ ok: true });
})
//Protected admin route auth
router.get('/admin-auth', requireLogin, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})


//Forget Password
router.post('/forgot-password', forgotPasswordController);
export default router;
