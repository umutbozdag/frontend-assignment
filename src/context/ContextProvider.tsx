import React, { createContext, useState, ReactNode } from 'react';

interface IContextData {
  activeTab: number;
}

interface IContext {
  sharedData: IContextData;
  setSharedData: React.Dispatch<React.SetStateAction<IContextData>>;
}

export const Context = createContext<IContext | null>(null);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sharedData, setSharedData] = useState({
    activeTab: 0,
  });

  return (
    <Context.Provider value={{ sharedData, setSharedData }}>
      {children}
    </Context.Provider>
  );
};
