import React, { useState, useEffect, createContext, useContext } from "react";
import DB from "./DB";



const DataContext = createContext();




export default function DataProvider({ children, state }) {
  const [value, setValue] = useState(null);

  useEffect(
    function () {
      const loadValue = async function () {
        const human = DB.getHuman("bandara-a-3182", "123");
        const emailAccountList = DB.getEmailAccountList(human);
        const emailIdx = DB.getEmailIdx();
        const activeEmailAccount = state.activeEmailAccount || emailAccountList[0];

        setValue({ human, emailAccountList, emailIdx, activeEmailAccount });
      };
      loadValue();
    },
    [state]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
