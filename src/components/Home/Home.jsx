import React from 'react';
import Headers from './HomePages/Headers';
import GallerySection from './GallerySection/GallerySection';
import ToyCards from './ToyCards';
import TabCategory from './TabCategory/TabCategory';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <GallerySection></GallerySection>
            <TabCategory></TabCategory>
        </div>
    );
};

export default Home;