import React from 'react';
import Elipse_18 from 'assets/images/Ellipse 18.png';
import Vector_6 from 'assets/images/Vector 6.png';
import Vector_14 from 'assets/images/Vector 14.png';
import Space_img from 'assets/images/space.png';
import Space_img_Avif from 'assets/images/space.avif';
import Space_img_Webp from 'assets/images/space.webp';
import Space2_img from 'assets/images/space2.png';
import Space2_img_Webp from 'assets/images/space2.webp';
import RoundedText from 'components/atoms/RoundedText';
import Polygon2 from 'components/atoms/Polygon2';
import { Wrapper } from './About.styles';

const About = () => {
  return (
    <Wrapper id='about' className='section-center'>
      <div className='Elipse_18'>
        <img src={Elipse_18} alt='Elipse_18' />
      </div>
      <div className='Vector_6'>
        <img src={Vector_6} alt='Vector_6' />
      </div>
      <div className='Vector_14'>
        <img src={Vector_14} alt='Vector_14' />
      </div>
      <div className='space-img'>
        <picture loading='lazy'>
          <source type='image/avif' srcSet={Space_img_Avif} />
          <source type='image/webp' srcSet={Space_img_Webp} />
          <img src={Space_img} alt='space_img' srcSet='' />
        </picture>
      </div>
      <div className='space2-img'>
        <picture loading='lazy'>
          <source type='image/webp' srcSet={Space2_img_Webp} />
          <img src={Space2_img} alt='space2_img' srcSet='' />
        </picture>
      </div>
      <div className='about-us'>
        <span className='h2'>
          About
          <br />
          <span className='us'>Us</span>
        </span>
      </div>
      <div className='quality'>
        <h3>High Quality</h3>
      </div>
      <div className='desc'>
        <p>
          The five-star Bank Hotel was reopened to visitors in 2016. The
          building was renovated and modernized to meet the expectations of the
          most demanding guests. We offer luxurious rooms, numerous facilities,
          and exceptional service.{' '}
        </p>
      </div>
      <div className='label-container'>
        <RoundedText />
      </div>
      <Polygon2 />
    </Wrapper>
  );
};

export default About;
