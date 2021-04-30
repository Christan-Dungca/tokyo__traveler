import { useState } from "react";

const useAuth = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return tokenString;
  };

  const getUser = () => {
    let userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      userFromStorage = JSON.parse(userFromStorage);
    }
    return userFromStorage;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (tokenString) => {
    localStorage.setItem("token", tokenString);
    setToken(tokenString);
  };

  const saveUser = (userObj) => {
    localStorage.setItem("user", JSON.stringify(userObj));
    setUser(userObj);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  const login = (userToken, userObj) => {
    saveToken(userToken);
    saveUser(userObj);
  }

  const logout = () => {
    removeToken();
    removeUser();
  }

  return { login, logout, token, user}
};

export default useAuth;
