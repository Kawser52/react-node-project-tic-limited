import React from 'react';
import About from '../About/About';
import AboutHome from '../About/AboutHome/AboutHome';
import Header from '../Shared/Header/Header';
import Navigation from '../Shared/Navigation/Navigation';
import Slide from './Slider/Slide';

const Home = () => {
    return (
        <div>
            <Slide></Slide>
            <AboutHome></AboutHome>
        </div>
    );
};

export default Home;
