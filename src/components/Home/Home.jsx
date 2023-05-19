import React from 'react';
import Headers from './HomePages/Headers';
import GallerySection from './GallerySection/GallerySection';
import ToyCards from './ToyCards';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <GallerySection></GallerySection>
            <ToyCards></ToyCards>
        </div>
    );
};

export default Home;