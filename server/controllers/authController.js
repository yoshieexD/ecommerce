import authHelper from '../helpers/authHelper.js';
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        if (!name) {
            return res.send({ error: 'Name is required' });
        }
        if (!email) {
            return res.send({ error: 'Email is required' });
        }
        if (!password) {
            return res.send({ error: 'Password is required' });
        }
        if (!phone) {
            return res.send({ error: 'Phone is required' });
        }
        if (!address) {
            return res.send({ error: 'Address is required' });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already registered, please login',
            });
        }

        const hashedPassword = await authHelper.hashPassword(password);
        const user = new userModel({ name, email, password: hashedPassword, phone, address });

        await user.save();

        res.status(200).send({
            success: true,
            message: 'User registered successfully',
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in registration',
        });
    }
};
