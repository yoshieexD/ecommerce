import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "73vh" }}>
                <ToastContainer/>
                {children}
            </main>
            <Footer />
        </div>
    );
};
Layout.defaultProps = {
    title: 'Ecommerce - shop now',
    description: 'vite.js + react.js, boostrap, express.js, mongoDB',
    keywords: 'Ecommerce, Source code, Free code, Mern stack, Node.js, React.js, Full-stack',
    author: 'Jom Winston Magbag'
}

export default Layout;
