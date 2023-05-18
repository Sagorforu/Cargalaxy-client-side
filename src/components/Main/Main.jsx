import React from 'react';
import Navbar from '../SharedPage/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;