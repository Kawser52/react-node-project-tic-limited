import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../../img/cropped-TIC-01.png'
const Navigation = () => {
    return (
        <div className='navigation'>
            <div class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src={logo} class="img-fluid" width="200" alt=""/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to='/home' class="nav-link active" aria-current="page" href="#">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/about' class="nav-link" href="#">About</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Course <i class="fa-solid fa-plus"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Domain & Hosting</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Event</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
                <span class="navbar-text d-flex">
                    <button class="buttons">Browse Course</button>
                </span>
              </div>
        </div>
    </nav> 
       </div> 
    </div> 
    );
};

export default Navigation;