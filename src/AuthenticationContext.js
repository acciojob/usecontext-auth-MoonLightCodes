import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = ()=>useContext(AuthContext);

const ContextApi = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};



export default ContextApi;
