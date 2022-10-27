import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const Hooks = () => {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  //chamado após montar o componente

  useEffect(() =>{
    async function fetchStorage() {
        let storageToken = await AsyncStorage.getItem("@token");
        let storageUsuario = await AsyncStorage.getItem("@usuario");
        return({storageToken, storageUsuario})
    }
    const {storageToken, storageUsuario} = fetchStorage();
    if( storageToken ){
      const token = JSON.parse(storageToken);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setLogado(true);
      setUsuario(storageUsuario);
    }
    setIsLoading(false);
    console.log("Storage. Token:", storageToken);
  },[]);
  const fillStorage = async () => {
    await AsyncStorage.setItem("@token",JSON.stringify(data.token));
    await AsyncStorage.setItem("@usuario",JSON.stringify(data.CLI_ID));
  }
  const login = async (mail, senha) => {
    try{
      const {data} = await api.post("/usuario/login", { mail, senha });
      fillStorage()
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setLogado(true);
      setUsuario(data.usuario);
    }catch(e){
      console.log(e.message);
      alert(e.response.data.error[0]);
    }
  };
  const logout = async () => {
    setLogado(false);
    await AsyncStorage.clear("@token");
    await AsyncStorage.clear("@usuario");
    api.defaults.headers.Authorization = undefined;
  };
  return {login, logout, logado, setLogado, isLoading, usuario };
};

export default Hooks;