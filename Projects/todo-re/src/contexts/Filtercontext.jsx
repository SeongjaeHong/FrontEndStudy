import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext('all');
const FilterSettercontext = createContext(() => {});

export default function FilterProvider({ children }) {
  const [filter, setFilter] = useState('all');
  return (
    <FilterContext.Provider value={filter}>
      <FilterSettercontext.Provider value={setFilter}>
        {children}
      </FilterSettercontext.Provider>
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}

export function useFilterSetter() {
  return useContext(FilterSettercontext);
}
