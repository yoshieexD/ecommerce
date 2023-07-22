import express from 'express'
import { isAdmin, requireLogin } from '../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js'

const router = express.Router();

router.post('/create-category', requireLogin, isAdmin, createCategoryController);

//update
router.put('/update-category/:id', requireLogin, isAdmin, updateCategoryController);
//get all
router.get('/get-category', categoryController);
//single 
router.get('/single-category/:slug', singleCategoryController);
router.delete('/delete-category/:id', requireLogin, isAdmin, deleteCategoryController);

export default router;