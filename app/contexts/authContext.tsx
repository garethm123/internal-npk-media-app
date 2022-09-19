import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUseAuth {
  authed: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<Partial<IUseAuth>>({});

export default function AuthProvider({ children }: any) {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    checkLoginState();
  }, []);

  const checkLoginState = async () => {
    const userStatus = await AsyncStorage.getItem('npkTestAuth');
    if (userStatus && userStatus === 'loggedIn') {
      setAuthed(true);
    } 
  }

  const login = async () => {
    setAuthed(true);
    AsyncStorage.setItem('npkTestAuth', 'loggedIn');
  }

  const logout = async () => {
    setAuthed(false);
    AsyncStorage.removeItem('npkTestAuth');
  }

  return (
    <AuthContext.Provider value={{authed, login, logout}}>
      { children }
    </AuthContext.Provider>
  )
}