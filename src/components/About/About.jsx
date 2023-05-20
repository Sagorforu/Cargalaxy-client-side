import React from 'react';
import useTitle from '../../hook/useTitle';

const About = () => {
    useTitle('About us')


    return (
        <div>
            <h2>this is about page</h2>
        </div>
    );
};

export default About;