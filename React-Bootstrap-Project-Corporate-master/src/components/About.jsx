import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../utils/images/SchoolInternal.jpg';

import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>Our journey to establish IQRAA Public School began in 1997, and after years of growth, we are now entering a phase of stability and progress. Education is the foundation for a fair, dynamic, and productive society, unlocking the potential within each of us. As we move forward, knowledge and skills will be the keys to success.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p><span style={{fontWeight:'bold'}}>Iqraa Public School: Nurturing Minds for a Brighter Future </span></p>
                    <p className='mb-4 mb-lg-5'>Discover a world of excellence at Iqraa Public School. We are committed to providing a comprehensive education that fosters intellectual growth, character development, and a lifelong love of learning.</p>
                    <p className='mb-4 mb-lg-5'><span style={{fontWeight:'bold'}}>Our Vision:</span> To inspire young minds to reach their full potential and become responsible, compassionate, and successful individuals.</p>
                    <p className='mb-4 mb-lg-5'><span style={{fontWeight:'bold'}}>Our Mission:</span> To create a nurturing environment that promotes academic excellence, character development, and a lifelong passion for learning.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        {/* <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div> */}

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>

        {/* <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default About;