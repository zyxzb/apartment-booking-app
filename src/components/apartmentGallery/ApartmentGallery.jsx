import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Wrapper } from './ApartmentGallery.styles';

const ApartmentGallery = ({ images = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState('null');
  const gallery = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    setMainImage(images[0].url);
  }, [images]);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .set(gallery.current, { autoAlpha: 0 })
      .to(gallery.current, { autoAlpha: 1, duration: 1.2 });
  }, []);

  return (
    <Wrapper ref={gallery}>
      <img src={mainImage} alt='main' className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt={image.filename}
              onClick={() => setMainImage(images[index].url)}
              className={image.url === mainImage.url ? 'active' : null}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ApartmentGallery;
