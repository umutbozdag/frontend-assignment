import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ISharedContextData {
  activeTab: number;
}

// Define the shape of the context
interface IContext {
  sharedData: ISharedContextData;
  setSharedData: React.Dispatch<React.SetStateAction<ISharedContextData>>;
}

export const Context = createContext<IContext | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define your shared state or data here
  const [sharedData, setSharedData] = useState({
    activeTab: 0
  });

  return (
    <Context.Provider value={{ sharedData, setSharedData }}>
      {children}
    </Context.Provider>
  );
};