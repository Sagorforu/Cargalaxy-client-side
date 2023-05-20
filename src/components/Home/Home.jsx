import React from 'react';
import Headers from './HomePages/Headers';
import GallerySection from './GallerySection/GallerySection';
import TabCategory from './TabCategory/TabCategory';
import useTitle from '../../hook/useTitle';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Headers></Headers>
            <GallerySection></GallerySection>
            <TabCategory></TabCategory>
        </div>
    );
};

export default Home;