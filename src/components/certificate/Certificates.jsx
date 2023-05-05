import React from 'react';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import images
import IMG1 from '../../assets/certificates/Diploma-Imagina.png'
import IMG2 from '../../assets/certificates/certificado-React.png'
import IMG3 from '../../assets/certificates/CertificadoJavaScript.png'
import IMG4 from '../../assets/certificates/certificadoDesarrolloWeb.png'
import IMG5 from '../../assets/certificates/CertificadoDeFinalizacion_MySQL esencial.png'
import IMG6 from '../../assets/certificates/CertificadoDeFinalizacion_Aprende SCRUM.png'
import IMG7 from '../../assets/certificates/Certificado-UTN.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './certificates.css';

const Certificates = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rect Js - Imagina Formación',
      role: ' JavaScript | React | Redux.',
      img:IMG1
    },
    {
      id: 2,
      name: 'React Js - Coderhouse',
      role: ' JavaScript | React | Redux.',
      img: IMG2,
    },
    {
      id: 3,
      name: 'JavaScript - Coderhouse',
      role: 'JavaScript.',
      img: IMG3,
    },
    {
      id: 4,
      name: 'Desarrollo Web - Coderhouse',
      role: 'HTML | CSS | SASS',
      img: IMG4,
    },
    {
      id: 5,
      name: 'mySQL - Linkedin Learning',
      role: 'mySQL',
      img: IMG5,
    },
    {
      id: 6,
      name: 'Aprende Scrum - Linkedin Learning',
      role: 'Aprende Scrum',
      img: IMG6,
    },
    {
      id: 7,
      name: 'JavaScript - U.T.N',
      role: 'JavaScript',
      img: IMG7,
    },
  ];
  return (
    <section id="certificates">
      <h5>My way to code! </h5>
      <h2>Certificates</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">
            <img src={test.img} alt={test.role}/></small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Certificates