import React, { useEffect, useContext, useReducer } from 'react';
import filter_reducer from 'reducers/filter_reducer';
import {
  UPDATE_FILTERS,
  LOAD_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from 'utils/actions';
import { useApartmentsContext } from './apartments_context';

const initialState = {
  // two arrays in case of reset filters
  all_apartments: [],
  filtered_apartments: [],
  filters: {
    price: 0,
    min_price: 0,
    max_price: 0,
    rooms: 1,
    adults: 1,
    children: 1,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { apartments } = useApartmentsContext();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: apartments });
  }, [apartments]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
