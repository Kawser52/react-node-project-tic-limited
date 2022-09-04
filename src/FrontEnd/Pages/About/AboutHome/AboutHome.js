import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Slide from '../../Home/Slider/Slide';
import './AboutHome.css'
import test from '../../../../img/test.jpg'
const AboutHome = () => {
    return (
        <div className="AboutHome">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 mt-5">
                        <div class="image-circle">
                            <img src={test} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="about-us-content">
                            <p className='about-title'>ABOUT OUR COMPANY</p>
                            <h2 id='about-heading' className='my-4'>Tech IT Center will furnish you with all the needs</h2>
                            <p className='common-style-paragraph'>we have been providing several online course facilities for the students since we started the journey.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                            <div className="col-md-6 mt-3">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                            <div className="col-md-6 mt-3">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                            <div className="col-md-6 mt-3">
                                <h5 className='common-heading-style'><FontAwesomeIcon icon={faCircleCheck} className="highlight" beatFade />Our Mission</h5>
                                <p className='common-style-paragraph'>We stand here to move ahead in the highest way of success together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    );
};

export default AboutHome;