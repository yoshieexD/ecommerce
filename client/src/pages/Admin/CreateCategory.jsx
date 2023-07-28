import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';
import Swal from 'sweetalert2';
import axios from 'axios';
import CategoryForm from '../../components/Forms/CategoryForm';
import { Modal } from 'antd';

const CreateCategory = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/category/create-category`, { name })
            if (data?.success) {
                getAllCategory();
                Swal.fire({
                    icon: 'success',
                    title: 'Category Created!',
                    text: `The ${name} was created successfully.`,
                });
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `An error occurred while creating the ${name}.`,
                });
            }
        }
        catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while creating the category.',
            });
        }
    }
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/category/get-category`)
            if (data.success) {
                setCategories(data.category);
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

    //update individual 
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/category/update-category/${selected._id}`, { name: updatedName });
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Category Updated!',
                    text: `The ${name} was updated successfully.`,
                });
                setSelected(null)
                setUpdatedName("")
                setVisible(false)
                getAllCategory()
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `An error occurred while updating the ${name}.`,
                });
            }

        }
        catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Oops!", "Something went wrong.',
            });
        }
    }

    //delete individual 
    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(
                `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/category/delete-category/${pId}`
            );
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Category Deleted!',
                    text: `The ${name} was deleted successfully.`,
                });

                getAllCategory();
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Category Deleted!',
                    text: `The ${name} was deleting successfully.`,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `An error occurred while deleting the ${name}.`,
            });
        }
    };
    return (
        <Layout title={'Admin Dashboard: Create Category - Ecommerce'}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className=" w-75 p-3">
                            <h3>Manage Category</h3>
                            <div className="p-3 w-50">
                                <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                            </div>
                            <table className="table w-76">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map(c => (
                                        <tr key={c.id}>
                                            <>
                                                <td>{c.name}</td>
                                                <td><button className="btn btn-primary ms-2" onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c); }}>Edit</button>
                                                    <button className="btn btn-danger ms-2" onClick={() => { handleDelete(c._id) }}>Delete</button>
                                                </td>
                                            </>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
                            <CategoryForm handleSubmit={handleUpdate} value={updatedName} setValue={setUpdatedName} />
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateCategory;