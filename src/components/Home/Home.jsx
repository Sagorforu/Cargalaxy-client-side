import React from 'react';
import Navbar from '../SharedPage/Navbar';
import Headers from './HomePages/Headers';
import GallerySection from './GallerySection/GallerySection';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <GallerySection></GallerySection>
        </div>
    );
};

export default Home;