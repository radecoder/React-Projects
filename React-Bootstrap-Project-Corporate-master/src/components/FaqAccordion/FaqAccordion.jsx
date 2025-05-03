import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Welcome to our Frequently Asked Questions (FAQs) page! We understand that parents and students may have several questions about our school, its policies, and day-to-day operations. To help you find answers quickly, we’ve compiled responses to the most common inquiries we receive. If you don’t see your question here, feel free to reach out to us directly — we’re here to help!</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>1. What are the school timings?</Accordion.Header>
                    <Accordion.Body>
                    Our school operates from 8:00 AM to 1:30 PM, Monday through Friday. We also offer optional extracurricular activities from 3:00 PM to 4:00 PM on select days.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>2. What is the admission process?</Accordion.Header>
                    <Accordion.Body>
                    To apply for admission, parents can:

                    Fill out the online application form available on our website.
                    Submit the required documents, including proof of age, previous school records, and a copy of the child's birth certificate.
                    Attend an interview or assessment (for certain grade levels).
                    After submission, our admissions team will review the application and contact you for the next steps.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>3. Does the school offer transportation?</Accordion.Header>
                    <Accordion.Body>
                    Yes, we provide a safe and reliable bus service for students. The routes cover major residential areas, and detailed information about timings and stops is shared with parents upon admission
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>4. What curriculum does the school follow?</Accordion.Header>
                    <Accordion.Body>
                    Our school follows the CBSE curriculum, focusing on a balanced approach to academics, co-curricular activities, and moral education. Our teaching methods emphasize critical thinking, creativity, and collaborative learning.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;