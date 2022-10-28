import React, {createContext} from 'react';
import Hooks from "./hooks";

const Context = createContext({logado: true});

function AuthProvider({ children }) {
  const {login, logout, logado, isLoading, perfil} = Hooks;
  return (
    <Context.Provider value={{login, logout, isLoading, perfil, logado: true}}>
      {children}
    </Context.Provider>
  );
}
export { Context, AuthProvider };