import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { isAdmin, requireLogin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/test', requireLogin, isAdmin, testController)

//Protected routh auth
router.get('/user-auth', requireLogin,(req,res)=>{
    res.status(200).send({ok:true});
})
export default router;
