import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Select } from 'antd';
import { Navigate } from 'react-router-dom';
const { Option } = Select;



const CreateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");
    const [category, setCategory] = useState("");

    // get category 
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/category/get-category`)
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Oops!", "Something went wrong while getting the category.',
            });
        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);

    // create product
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/product/create-product`, {
                name,
                description,
                price,
                category,
                quantity,
                shipping,
            });
            console.log("Response data:", data); // Add this line to check the response data
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product Created!',
                    text: `The ${name} was created successfully.`,
                });
                Navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `An error occurred while creating the ${name}.`,
                });
            }
        } catch (error) {
            console.log(error); // Add this line to check the error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Oops!", "Something went wrong while creating the product.',
            });
        }
    };
    return (
        <Layout title={'Admin Dashboard: Users List - Ecommerce'}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="w-75 p-3">
                            <h3>Create Product</h3>
                            <div className="m-1 w-90">
                                <Select bordered={false} placeholder="Select a category" size='large' showSearch className='form-select mb-3' onChange={() => { setCategories }}>
                                    {categories?.map(c => (
                                        <Option key={c._id} value={c._id}>
                                            {c.name}
                                        </Option>
                                    ))}

                                </Select>
                            </div>
                            <form onSubmit={handleCreate}>
                                <div className="mb-3">
                                    <label className='btn btn-outline-secondary col-md-12'>
                                        {photo ? photo.name : "Upload Photo"}
                                        <input type="file" name="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} hidden
                                        />
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={name} placeholder='write name' className='form-control' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" value={description} placeholder='write description' className='form-control' onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="number" value={price} placeholder='write price' className='form-control' onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="number" value={quantity} placeholder='write quantity' className='form-control' onChange={(e) => setQuantity(e.target.value)} />
                                </div>
                                <Select
                                    bordered={false}
                                    placeholder="Select shipping"
                                    size='large'
                                    showSearch
                                    className='form-select mb-3'
                                    onChange={(value) => setShipping(value)}
                                >
                                    <Option value="0">No</Option>
                                    <Option value="1">Yes</Option>
                                </Select>
                                <div className="mb-3">
                                    <button type="submit" className='btn btn-primary'>Create Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default CreateProduct;