import React, { createContext, useState, useContext } from 'react';

const LoadContext = createContext();

export default function LoadProvider({ children }) {
  const [load, setLoad] = useState(false);
  return (
    <LoadContext.Provider
      value={{
        load,
        setLoad,
      }}
    >
      {children}
    </LoadContext.Provider>
  );
}

export function useLoad() {
  const context = useContext(LoadContext);
  const { load, setLoad } = context;
  return { load, setLoad };
}
