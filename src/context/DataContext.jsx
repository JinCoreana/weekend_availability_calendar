import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateList, setSelectedDateList] = useState([]);

  return (
    <DataContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        setSelectedDateList,
        selectedDateList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
