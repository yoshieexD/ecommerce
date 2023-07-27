import express from 'express'
import { createProductController, getProductController, productPhotoController, getSingleProductController, productDeleteController, updateProductController } from '../controllers/productController.js';
import { requireLogin, isAdmin } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';
const router = express.Router();

router.post('/create-product', requireLogin, isAdmin, formidable(), createProductController);
router.put('/update-product/:pid', requireLogin, isAdmin, formidable(), updateProductController);
router.get('/get-product', getProductController)
router.get('/single-product/:slug', getSingleProductController)
router.get('/product-photo/:pid', productPhotoController)
router.delete('/product/:pid', productDeleteController);
export default router;

