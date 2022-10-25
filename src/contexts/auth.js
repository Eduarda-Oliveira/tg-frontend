import React, {createContext} from 'react';
import Hooks from "./hooks";

const Context = createContext();
function AuthProvider({ children }) {
  const {login, logout, logado, isLoading, perfil} = Hooks();
  return (
    <Context.Provider value={{login, logout, logado, isLoading, perfil}}>
      {children}
    </Context.Provider>
  );
}
export { Context, AuthProvider };