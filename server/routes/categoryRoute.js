import express from 'express'
import { isAdmin, requireLogin } from '../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, updateCategoryController } from '../controllers/categoryController.js'

const router = express.Router();

router.post('/create-category', requireLogin, isAdmin, createCategoryController);

//update
router.put('/update-category/:id', requireLogin, isAdmin, updateCategoryController);
router.get('/get-category', categoryController);


export default router;