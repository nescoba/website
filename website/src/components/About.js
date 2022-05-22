import React from 'react';
import lead from '../text/lead.js'

export default function About(){
    return(
        <div className='mt-5 text-white text-start ps-5 pe-5'>
            <h2 id='about'>About</h2>

            <p className='lead'>
                {lead}
            </p>

            <h3>Education</h3>
            <ul>
                <li>Indiana University | Bloomington, IN | <strong>Master of Arts in Mathematics</strong> | August 2021 | GPA: 4.0/4.0</li>
                <li>Universidad de los Andes | Bogota, Colombia | <strong>Bachelor of Science in Mathematics, Physics</strong> | April 2015</li>
            </ul>

            <h3>Skills</h3>
            <ul>
                <li>Machine Learning algorithms in Python. Experience with <strong>numpy</strong>, <strong>pandas</strong>, <strong>scikit-learn</strong>, <strong>keras</strong> and <strong>tensorflow</strong></li>
                <li>Linear Regression Models, Optimization Algorithms, MCMC methods and Time Series Analysis routines in <strong>R</strong></li>
                <li>Creating queries and joins in <strong>SQL</strong></li>
                <li>Front-End development with <strong>Bootstrap</strong> and <strong>React</strong></li>
            </ul>

        </div>
    )
}