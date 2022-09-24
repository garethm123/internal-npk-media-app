import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface IUseAuth {
  authed: boolean;
  login: () => void;
  logout: () => void;
  register: () => void;
}

export const AuthContext = createContext<Partial<IUseAuth>>({});

export default function AuthProvider({ children }: any) {
  const [authed, setAuthed] = useState(true);

  useEffect(() => {
    checkLoginState();
  }, []);

  const checkLoginState = async () => {
    const userStatus = await AsyncStorage.getItem("npkTestAuth");
    if (userStatus && userStatus === "loggedIn") {
      setAuthed(true);
    }
  };

  const login = async () => {
    setAuthed(true);
    AsyncStorage.setItem("npkTestAuth", "loggedIn");
  };

  const logout = async () => {
    setAuthed(false);
    AsyncStorage.removeItem("npkTestAuth");
  };

  const register = async () => {
    try {
      // const { data } = await axios('http://172.16.119.193:3333/user/register', {
      //   method: 'POST'
      // });
      // console.log('response:> ', data)
    } catch (err) {
      console.log("Fetch error: ", err);
    }
  };

  return (
    <AuthContext.Provider value={{ authed, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
