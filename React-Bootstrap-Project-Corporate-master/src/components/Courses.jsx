import React from 'react';
import '../components/Courses.css';
import { Card } from 'react-bootstrap';
import PrimaryWingImg from '../utils/images/School_Children1.jpg';
import ArtCraftImg from '../utils/images/School_Children3.jpg';

import SeniorWingImg from '../utils/images/School_Students.jpg';
import MiddleWingImg from '../utils/images/School_Students2.jpg';

import SportsYogaImg from '../utils/images/School_Sport3.jpg';
import StreasmImg from '../utils/images/School_Sport4.jpg';

import MusicImg from '../utils/images/Music.jpg';
import OlympiadImg from '../utils/images/Olympiad.jpg';

//import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [PrimaryWingImg],
        title: 'PRIMARY WING (Classes I-V)',
        description: <p>English &#9679; Hindi &#9679; Urdu &#9679; Mathematics &#9679; Science (Class IV onwards) &#9679; EVS &#9679; Social Science (Class IV onwards) &#9679; Computer Science (for Classes I to IV) &#9679; GK &#9679; Art & Craft &#9679; Dance &#9679; Physical Training &#9679; Yoga</p>
    },
    {
        id: 2,
        img: [MiddleWingImg],
        title: 'MIDDLE WING (Class VI-VIII)',
        description: <p>English &#9679; Hindi &#9679; Urdu &#9679; Mathematics &#9679; Computer Science &#9679; GK &#9679; Social Science &#9679; Painting &#9679; Health and Physical Education &#9679; Yoga</p>
    },
    {
        id: 3,
        img: [SeniorWingImg],
        title: 'SENIOR WING (Class IX & X)',
        description: <p>English &#9679; Hindi &#9679; Urdu &#9679; Mathematics &#9679; Science &#9679; GK &#9679; Social Science &#9679; Computer &#9679; Art Education &#9679; Health and Physical Education &#9679; Yoga</p>
    },
    {
        id: 4,
        img: [StreasmImg],
        title: 'Streams & Subjects Offered (Class XI-XII)',
        description: <div><h3>Humanities/Commerce/Science Stream</h3><p>English &#9679; Political Science / Chemistry &#9679; History / Physics &#9679; Math/Biology/Physical Education &#9679; Hindi/Urdu</p></div>
    },
    {
        id: 5,
        img: [SportsYogaImg],
        title: 'Sports & Yoga',
        description: <div><p>Cricket &#9679; Football &#9679; Basketball &#9679; Badminton &#9679; Volleyball &#9679; Taekwondo &#9679; Table Tennis &#9679; Chess &#9679; Carrom &#9679; Gymnastics</p><p>Students gain self-empowerment and enlightenment under the guidance of qualified Yoga teachers.</p></div>
    },
    {
        id: 6,
        img: [ArtCraftImg],
        title: 'Art & Craft',
        description: 'Students will engage in various art and craft projects, exploring their creativity through mediums like clay, fabric, sand, paint, and paper.'
    },
    {
        id: 7,
        img: [MusicImg],
        title: 'Music & Dramatics',
        description: 'Students are encouraged to develop their public speaking and dramatic skills through elocution, debates, and recitation.'
    },
    {
        id: 8,
        img: [OlympiadImg],
        title: 'Olympiads',
        description: 'Olympiads offer students a unique opportunity beyond regular school exams. These curriculum-based competitions, organized by independent bodies, challenge students and prepare them for future success.'
    },
    // {
    //     id: 9,
    //     img: [SportCourseImg],
    //     title: 'IQRAA STUDENT COUNCIL (ISU)',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    // }
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Curriculum</h1>
                <p className='text-center w-75 mb-5'>IQRAA Public School follows the Uniform System of Assessment per the latest CBSE guidelines for consistent evaluation. We also incorporate subject enrichment activities to enhance students' skills. Our curriculum is designed to nurture each student's unique strengths.</p>
                {/* <p className='text-center w-75 mb-5'>We believe that every student has the potential to excel and succeed when nurtured in an environment of encouragement and support. Our curriculum not only promotes overall personal growth but also helps students achieve key milestones such as securing admission to prestigious universities and pursuing successful careers.</p>
                <p className='text-center w-75 mb-5'>Our classrooms are equipped with modern educational tools like Smart Class Technology, interactive boards, advanced computing systems, and specialized learning spaces including biology, chemistry, physics, communication, social studies labs, and AV labs. The curriculum aligns with the latest global educational trends and techniques, offering diverse opportunities for practical application, making the learning experience both challenging and rewarding.</p> */}
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        {/* <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div> */}
    </div>
  )
}

export default Courses;