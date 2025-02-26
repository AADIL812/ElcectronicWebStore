import React, { createContext, useState } from "react";

export const userContext = createContext();

const Userprovider = ({ children }) => {
  const [user, setUser] = useState(null);
 // const [cart,setCart]=useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default Userprovider;
