import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [universityData, setUniversityData] = useState(null);
  const globalStore = {
    universityData,
    setUniversityData,
  }
  return (
    <GlobalContext.Provider value={globalStore}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext;