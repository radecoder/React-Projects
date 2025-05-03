import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {

 const onFormSubmit = (e) =>{
    e.preventDefault();
    const form = e.currentTarget;
    
    if(!form[0].value || !form[3].value){
        alert('Please Enter Mandatory "First Name" &  "Your Message" fields');
      return;
    }

    let firstName = form[0] ? form[0].value : '';
    let lastName = form[1] ? form[1].value : '';
    let email = form[2] ? form[2].value : '';
    let message = form[3] ? form[3].value : '';
    
    let msg = "Hello Sir/Mam, "+ message+ " ... From, name:"+ firstName + " " + lastName + (email? " ,email: "+email:'');
    window.open("https://wa.me/7303015715?text="+msg);
 } 
 

  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Contact Us</h1>
                <p className='text-center w-75 mb-5'>We’re excited to hear from you! Whether you’re a prospective student, parent, or community member, we’re here to assist with any queries you may have.</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form' onSubmit={onFormSubmit}>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-4'>
            {/* <div className='container'>
                <h2 className='text-center mb-5'>Locate Us</h2>
                <div className='row g-4'>
                    
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Contact;