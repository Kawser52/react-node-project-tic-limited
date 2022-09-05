import React from 'react';
import About from '../About/About';
import AboutHome from '../About/AboutHome/AboutHome';
import Slide from './Slider/Slide';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    
    return (
        <div>
            <Slide></Slide>
            <AboutHome></AboutHome>
            <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default Home;
