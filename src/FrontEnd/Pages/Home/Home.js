import React from 'react';
import AboutHome from '../About/AboutHome/AboutHome';
import Counter from './Counter/Counter';
import Slide from './Slider/Slide';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    
    return (
        <div>
            <Slide></Slide>
            <AboutHome></AboutHome>
            <Counter></Counter>
            <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default Home;
