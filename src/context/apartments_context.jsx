import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { apartments_url as url } from 'utils/constants';

const ApartmentsContext = React.createContext();

export const ApartmentsProvider = ({ children }) => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState('');
  const [apartmentsLoading, setApartmentsLoading] = useState(null);
  const [singleApartment, setSingleApartment] = useState([]);
  const [singleApartmentError, setSingleApartmentError] = useState('');
  const [singleApartmentLoading, setSingleApartmentLoading] = useState(null);

  // Products
  const fetchApartments = async (url) => {
    setApartmentsLoading(true);
    try {
      const resposne = await axios.get(url);
      const apartments = resposne.data;
      setApartments(apartments);
      setApartmentsLoading(false);
    } catch (err) {
      setError(err.message);
      setApartmentsLoading(false);
    }
  };

  // Single Apartment
  const fetchSingleProduct = async (url) => {
    setSingleApartmentLoading(true);
    try {
      const resposne = await axios.get(url);
      const singleApartment = resposne.data;
      setSingleApartment(singleApartment);
      setSingleApartmentLoading(false);
    } catch (err) {
      setSingleApartmentError(err.message);
      setSingleApartmentLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments(url);
  }, []);

  return (
    <ApartmentsContext.Provider
      value={{
        apartments,
        error,
        apartmentsLoading,
        fetchSingleProduct,
        singleApartment,
        singleApartmentError,
        singleApartmentLoading,
      }}
    >
      {children}
    </ApartmentsContext.Provider>
  );
};
// make sure use
export const useApartmentsContext = () => {
  return useContext(ApartmentsContext);
};
