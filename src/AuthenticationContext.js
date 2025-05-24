import React, { createContext, useContext, useState } from "react";

const ConProvider = createContext();
export const useAuth = ()=>useContext(ConProvider);

const ContextApi = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  return (
    <ConProvider.Provider value={{ isAuthed, setIsAuthed }}>
      {children}
    </ConProvider.Provider>
  );
};

export default ContextApi;
