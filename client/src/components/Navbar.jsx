import React from 'react';
import { FaReact, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <FaReact className="me-2" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Shop
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Blogs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <FaShoppingCart className='me-2' />
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaUser className='me-2' />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Login</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
