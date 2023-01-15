import {
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  LOAD_PRODUCTS,
} from 'utils/actions';

const filter_reducer = (state, action) => {
  // Load initialState

  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_apartments: [...action.payload],
      filtered_apartments: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }

  // Update filter

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  //  Filter Products

  if (action.type === FILTER_PRODUCTS) {
    const { all_apartments } = state;
    const { price, rooms, adults, children } = state.filters;
    let tempApartments = [...all_apartments];

    tempApartments = tempApartments.filter(
      (apartment) => apartment.price <= price,
    );

    tempApartments = tempApartments.filter(
      (apartment) => apartment.rooms >= rooms,
    );
    tempApartments = tempApartments.filter(
      (apartment) => apartment.adults >= adults,
    );
    tempApartments = tempApartments.filter(
      (apartment) => apartment.children >= children,
    );

    return {
      ...state,
      filtered_apartments: tempApartments,
    };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        price: state.filters.max_price,
        min_price: 0,
        rooms: 1,
        adults: 1,
        children: 1,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default filter_reducer;
