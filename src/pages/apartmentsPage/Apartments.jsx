import React from 'react';
import { Wrapper } from './Apartments.styles';
import Polygon2 from 'components/atoms/Polygon2';
import Apartment from 'components/apartment/Apartment';
import { useApartmentsContext } from 'context/apartments_context';
import Loader from 'components/atoms/Loader';
import SearchContainer from 'components/searchContainer/SearchContainer';
import { useFilterContext } from 'context/filter_context';

const Apartments = () => {
  const { error, apartmentsLoading } = useApartmentsContext();
  const { filtered_apartments: apartments } = useFilterContext();
  return (
    <Wrapper>
      <div className='title-wrapper section-center'>
        <h1>
          <span>Rooms</span>& apartments
        </h1>
        <Polygon2 />
        <p className='desc'>
          All room decoration was made with ecological certified and safe
          materials. The luxurious hotel in the most beautiful European city
          with an exclusive restaurant, conference-hall, and art-bar.
        </p>
        <span className='qty'>{`${apartments.length} Apartments`}</span>
      </div>
      <div className='apartments-wrapper' id='allapartments'>
        <SearchContainer />
        <div className='list-wrapper'>
          {apartments.length > 0 ? (
            apartments.map((apartment) => (
              <Apartment
                apartment={apartment}
                key={apartment.id}
                apartments={apartments}
              />
            ))
          ) : apartmentsLoading ? (
            <div className='load-err'>
              <Loader />
            </div>
          ) : error ? (
            <div className='load-err'>{error}</div>
          ) : apartments.length < 1 ? (
            <div className='load-err'>
              <p>Not found, change the search parameters 😥</p>
            </div>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};

export default Apartments;
