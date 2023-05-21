import React from 'react';
import Headers from './HomePages/Headers';
import GallerySection from './GallerySection/GallerySection';
import TabCategory from './TabCategory/TabCategory';
import useTitle from '../../hook/useTitle';
import ChoseUs from './ChoseUs/ChoseUs';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Headers></Headers>
            <GallerySection></GallerySection>
            <TabCategory></TabCategory>
            <ChoseUs></ChoseUs>
        </div>
    );
};

export default Home;