import React from 'react';
import { Carousel } from 'react-bootstrap';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Kanchan Vidya Mandir Public School',
    title2: 'Welcome To ',
    quote: ' "Where young minds blossom into tomorrow’s leaders" ',
    description: "Iqraa Public School, Fatehpur Taga, has been recognized as one of India's best schools by Careers360.",
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Kanchan Vidya Mandir Public School',
    title2: 'Welcome To ',
    quote: ' "A journey of excellence begins here — shape your child’s future with us" '
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Kanchan Vidya Mandir Public School',
    title2: 'Welcome To ',
    quote: ' "Enroll today — inspire a lifetime of learning and success" '
  }
];

function AppHome() {
  return (
      <section id="home" className="hero-block">
        <Carousel>
          {heroData.map(hero => (
            <Carousel.Item key={hero.id}>
              <img className="d-block w-100" style={{ height: '90vh', objectFit: 'cover' }} src={hero.image} alt={`Hero slide for ${hero.title}`} />
              <Carousel.Caption>
                <h2 style={{ color: '#007bff' }}>{hero.title2}</h2>
                <h1>{hero.title}</h1>
                <h3 style={{ color: '#007bff' }}>{hero.quote}</h3>
                <p>{hero.description}</p>
              </Carousel.Caption>             
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
  );
}

export default AppHome;
