import React from 'react';
import Headers from './Headers/Headers';
import GallerySection from './GallerySection/GallerySection';
import TabCategory from './TabCategory/TabCategory';
import useTitle from '../../hook/useTitle';
import ChoseUs from './ChoseUs/ChoseUs';
import Partners from './Partners/Partners';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Headers></Headers>
            <GallerySection></GallerySection>
            <TabCategory></TabCategory>
            <ChoseUs></ChoseUs>
            <Partners></Partners>
        </div>
    );
};

export default Home;