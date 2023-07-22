import productModel from '../models/productModel.js';
import fs, { readFileSync } from 'fs';
import slugify from 'slugify'

export const createProductController = async (req, res) => {
    try {
        const { name, slug, price, category, quantity } = req.fields
        const { photo } = req.files
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: 'Name is required' })
            case !slug:
                return res.status(500).send({ error: 'Slug is required' })
            case !price:
                return res.status(500).send({ error: 'Price is required' })
            case !category:
                return res.status(500).send({ error: 'Category is required' })
            case !quantity:
                return res.status(500).send({ error: 'Quantity is required' })
            case !photo && photo.size > 100000:
                return res.status(500).send({ error: 'Photo is required and should be less then 1mb' })
        };

        const products = new productModel({ ...req.fields, slug: slugify(name) })
        if (photo) {
            products.photo.data - fs, readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success: true,
            message: 'Product created Successfully',
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succcess: false,
            error,
            message: 'Error in creating product'
        })
    }
}

export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({ createdAt: -1 })
        res.status(200).send({
            success: true,
            countTotal: products.length,
            message: 'All product',
            products,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while getting product',
            error: error.message
        })
    }
}

export const singleProductController = async (req, res) => {
    try {
        const products = await productModel.findOne({ slug: req.params.slug }).select("-photo").populate("category")
        res.status(200).send({
            success: true,
            message: 'Success getting single product',
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while getting single product',
            error
        })
    }
}

export const productPhotoController = async (req, res) => {
    try {
        const products = await productModel.findById(req.params.pid).select("photo")
        if (products.photo.data) {
            res.set('Content-type', products.photo.contentType)
            return res.status(200).send(
                products.photo.data
            )
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while getting product photo',
            error
        })
    }
}