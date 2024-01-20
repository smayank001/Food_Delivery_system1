import React, { createContext, useContext, useState, useEffect } from 'react';

const DateContext = createContext();

export const useData = () => {
  return useContext(DateContext);
};

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  
  return (
    <DateContext.Provider value={{
       query, 
       setQuery, 
       cart,
       isLoading, 
       setCart,
       }}>
      {children}
    </DateContext.Provider>
  );
};