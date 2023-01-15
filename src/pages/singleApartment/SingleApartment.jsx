import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useApartmentsContext } from 'context/apartments_context';
import { single_apartment_url as url } from 'utils/constants';
import { Wrapper, ActionWrapper } from './SingleApartment.styles';
import ApartmentGallery from 'components/apartmentGallery/ApartmentGallery';
import ApartmentDetails from 'components/apartmentDetails/ApartmentDetails';
import Loader from 'components/atoms/Loader';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-toastify/dist/ReactToastify.css';

const SingleApartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    singleApartment,
    singleApartmentError,
    singleApartmentLoading,
  } = useApartmentsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (singleApartmentError) {
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
    // eslint-disable-next-line
  }, [singleApartmentError]);

  if (singleApartmentLoading) {
    return (
      <ActionWrapper className='section-center-p'>
        <Loader />
      </ActionWrapper>
    );
  }
  if (singleApartmentError) {
    return (
      <ActionWrapper className='section-center-p'>
        <h2>{singleApartmentError}</h2>
        <p>Redirecting to HomePage...</p>
      </ActionWrapper>
    );
  }
  return (
    <Wrapper className='section-center-p'>
      <div className='top'>
        <Link className='btn' to='/apartments'>
          back to apartments
        </Link>
      </div>
      <div className='center'>
        <ApartmentGallery images={singleApartment.image} />
        <ApartmentDetails singleApartment={singleApartment} />
      </div>
    </Wrapper>
  );
};

export default SingleApartment;
