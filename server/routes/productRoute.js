import express from 'express'
import { createProductController, getProductController, productPhotoController, singleProductController } from '../controllers/productController.js';
import { requireLogin, isAdmin } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';
const router = express.Router();

router.post('/create-product', requireLogin, isAdmin, formidable(), createProductController);
router.get('/get-product', getProductController)
router.get('/single-product/:slug', singleProductController)
router.get('/product-photo/:pid', productPhotoController)
export default router;

