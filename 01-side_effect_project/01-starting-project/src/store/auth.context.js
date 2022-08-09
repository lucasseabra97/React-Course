import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLogginState: false,
  onLogOut: () => {},
  onLogin: (email, password) => {},
});
const storedUserLogIn = localStorage.getItem("isLoggedIn");

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (storedUserLogIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogOut: logoutHandler, onLogin: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
