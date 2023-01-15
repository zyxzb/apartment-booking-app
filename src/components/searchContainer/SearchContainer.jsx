import { useFilterContext } from 'context/filter_context';
import React from 'react';
import { Wrapper } from './SearchContainer.styles';

const SearchContainer = () => {
  const { filters, updateFilters, clearFilters } = useFilterContext();
  const { adults, children, price, min_price, max_price, rooms } = filters;
  return (
    <Wrapper className='search-container'>
      <p className='list-search-title'>Znajdź odpowieni apartament:</p>
      <div className='list-search-item'>
        <label className='options'>Opcje:</label>
        <div className='list-search-option'>
          <span className='list-search-text'>
            Max. cena<small>(za noc:):</small> <br />
            <span>{price} zł</span>
          </span>
          <input
            type='range'
            name='price'
            className='list-search-option-input'
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          />
        </div>
        <div className='list-search-option'>
          <span className='list-search-text'>Dorośli:</span>
          <input
            type='number'
            name='adults'
            className='list-search-option-input'
            min='1'
            onChange={updateFilters}
            value={adults}
          />
        </div>
        <div className='list-search-option'>
          <span className='list-search-text'>Dzieci:</span>
          <input
            type='number'
            name='children'
            className='list-search-option-input'
            min='0'
            onChange={updateFilters}
            value={children}
          />
        </div>
        <div className='list-search-option'>
          <span className='list-search-text'>Pokoje:</span>
          <input
            type='number'
            name='rooms'
            className='list-search-option-input'
            min='1'
            onChange={updateFilters}
            value={rooms}
          />
        </div>
      </div>
      <button
        className='search-container-btn'
        type='button'
        onClick={clearFilters}
      >
        Wyczyść
      </button>
    </Wrapper>
  );
};

export default SearchContainer;
