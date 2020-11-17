import React from 'react';
// import './Header.scss';
import logo from '../../siteImages/logos/Logo.png';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div className="container">
                <a class="navbar-brand" href="#"><img src={logo} alt="..."/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#">Service</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#">Concerns</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#">Event</a>
                        </li>
                        <li class="nav-item ml-3">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item ml-3">
                            <button className="btn btn-main text-white">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;