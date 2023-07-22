import productModel from '../models/productModel.js';
import fs from 'fs'; // Removed { readFileSync } since it's not used
import slugify from 'slugify';

export const createProductController = async (req, res) => {
    try {
        const { name, price, category, quantity } = req.fields;
        const { photo } = req.files;

        // Validation
        if (!name || !price || !category || !quantity || !photo || photo.size > 100000) {
            return res.status(400).send({ error: 'Invalid product data' });
        }

        const slug = slugify(name);
        const products = new productModel({ name, slug, price, category, quantity });

        // Read the photo file and set the photo data and content type
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;

        await products.save();
        res.status(201).send({
            success: true,
            message: 'Product created successfully',
            products
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: 'Error in creating product'
        });
    }
};

export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({})
            .populate('category')
            .select("-photo")
            .limit(12)
            .sort({ createdAt: -1 });

        res.status(200).send({
            success: true,
            countTotal: products.length,
            message: 'All products',
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while getting products',
            error: error.message
        });
    }
};

export const singleProductController = async (req, res) => {
    try {
        const product = await productModel.findOne({ slug: req.params.slug })
            .select("-photo")
            .populate("category");

        if (!product) {
            return res.status(404).send({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Success getting single product',
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while getting single product',
            error
        });
    }
};

export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select("photo");

        if (!product || !product.photo || !product.photo.data) {
            return res.status(404).send({
                success: false,
                message: 'Product photo not found'
            });
        }

        res.set('Content-type', product.photo.contentType);
        return res.status(200).send(product.photo.data);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while getting product photo',
            error
        });
    }
};
