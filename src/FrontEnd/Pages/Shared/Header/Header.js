import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-6">
                    <div className="header p-2 d-flex justify-content-between">
                        <div className="contact text-white">
                            <span className="mx-2">+8801722952895</span> |
                            <span className="ms-2">support@ticlimited.com.bd</span>
                        </div>
                        <div className="social-media d-flex">
                            <Link to ='' href="www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                             <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;