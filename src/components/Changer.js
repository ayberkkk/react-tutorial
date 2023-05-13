import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Context } from "./context/SiteContext";
import { useAuth } from "./context/AuthContext";

const Changer = () => {
  const { theme, setTheme, language, setLanguage } = useContext(Context);
  const { user, setUser } = useAuth();

  const login = () => {
    setUser({
      name: "John",
      id: 1,
    });
    localStorage.setItem("user", JSON.stringify({ name: "John", id: 1 }));
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem("user");
  };

  // Sayfa yüklendiğinde localStorage'den kullanıcıyı kontrol edin
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <>
      Theme : {theme}
      <br />
      <Button
        variant="success"
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        }}
      >
        Change Theme
      </Button>
      <br /> <br />
      Language : {language}
      <br />
      <Button
        variant="warning"
        onClick={() => {
          const newLanguage = language === "TR" ? "EN" : "TR";
          setLanguage(newLanguage);
          localStorage.setItem("language", newLanguage);
        }}
      >
        Change Language
      </Button>
      <br />
      <br />
      {(user && <Button onClick={logout}>Logout</Button>) || (
        <Button onClick={login}>Login</Button>
      )}
    </>
  );
};

export default Changer;
