import React from "react";
import { FontSizeContextProvider } from "../components/context/FontSizeContext";
import { StylesProvider } from "../components/context/StylesContext";

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <FontSizeContextProvider>
      <StylesProvider>{children}</StylesProvider>
    </FontSizeContextProvider>
  );
};

export default AppProvider;
