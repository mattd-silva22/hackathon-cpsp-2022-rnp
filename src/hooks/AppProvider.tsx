import React, { useState } from "react";
import { FontSizeContextProvider } from "../components/context/FontSizeContext";
import StyleProvider from "./StyleProvider";

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <FontSizeContextProvider>
      <StyleProvider>{children}</StyleProvider>
    </FontSizeContextProvider>
  );
};

export default AppProvider;
