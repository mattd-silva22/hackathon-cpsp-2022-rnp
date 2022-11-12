const FontProvider: React.FC = () => {
  return <div />;
};

export default FontProvider;

import React, { createContext, useContext } from "react";

interface FontsContextData {}

const FontsContext = createContext<FontsContextData>({} as FontsContextData);

export const FontsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <FontsContext.Provider value={{}}>{children}</FontsContext.Provider>;
};

export function useFonts(): FontsContextData {
  const context: FontsContextData = useContext(FontsContext);

  if (!context) {
    throw new Error("useFonts must be used within an FontsProvider");
  }

  return context;
}
