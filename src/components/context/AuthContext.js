import { createContext, useContext, useState } from "react";

export const Context = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(false);
  const data = {
    user,
    setUser,
  };
  return (
    <Context.Provider value={data}>
      {children}
      {user && (
        <div style={{ padding: "10px" }}>
          Bu alan sadece giriş yapılınca görünür.
        </div>
      )}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);

export default AuthContext;
