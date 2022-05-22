import React from 'react';
// import background from '../images/background.jpg'
import profile from '../images/profile.jpg'

export default function Banner(){

    return(
        <div className='container-fluid text-white banner'>
            <div className='row pt-4'>
                <div className='col-8 mt-5 pt-5'>
                    <h1 className='display-1 banner-text'>Hello!</h1>
                    <p className="lead banner-text">
                       My name is Nicolas Escobar, but everyone calls me Nico. 
                    </p>
                </div>
                <div className='col-4 mt-4'>
                    <img src={profile} alt="profile picture" id='profile'></img>
                </div>
            </div>
        </div>
    )
}