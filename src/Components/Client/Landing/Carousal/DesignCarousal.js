import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import Slider from 'react-slick'
import Image from '../../../Image';



const DesignCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    dir: "rtl",
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <Slider className='my-3' {...settings}>
        <div className='   d-flex my-5 slider-Container m-auto  justify-content-center  '>
          <Image
            src={`${process.env.PUBLIC_URL + "slider/design/design2.jpeg"}`}
            alt="design carousal" className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center  '>
          <Image
            src={`${process.env.PUBLIC_URL + "slider/design/design2.jpeg"}`}
            alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center '>
          <Image
            src={`${process.env.PUBLIC_URL + "slider/design/design3.jpeg"}`}

            alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container   m-auto  justify-content-center '>
          <Image
            src={`${process.env.PUBLIC_URL + "slider/design/design4.jpeg"}`}

            alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center '>
          <Image
            src={`${process.env.PUBLIC_URL + "slider/design/design5.jpeg"}`}


            alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container   m-auto  justify-content-center '>
          <Image
            src={`${process.env.PUBLIC_URL + "slider/design/design2.jpeg"}`}

            alt='design ' className='w-100 h-100 ' />
        </div>


      </Slider>

    </Container>
  )
}

export default DesignCarousal
