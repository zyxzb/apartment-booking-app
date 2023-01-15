import React, { useState, useEffect, useContext } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [is50, setIs50] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSctollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const topAndClose = () => {
    closeSidebar();
    handleSctollToTop();
  };

  useEffect(() => {
    const updatePosition = () => {
      if (window.pageYOffset > 50) {
        setIs50(true);
      } else if (window.pageYOffset === 0) {
        setIs50(false);
      }
    };
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        is50,
        handleSctollToTop,
        topAndClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
