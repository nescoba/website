import React from 'react';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
                {/* <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#gallery">Gallery</a>
                    </li>
                    {/* <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
    )
}