import { createContext, ReactNode, useState } from "react";

interface IFontSizeContext {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}
interface IFontSizeContextProviderProps {
  children: ReactNode;
}

export const FontSizeContext = createContext({} as IFontSizeContext);

export function FontSizeContextProvider(props: IFontSizeContextProviderProps) {
  const [fontSize, setFontSize] = useState<number>(100);

  return (
    <FontSizeContext.Provider
      value={{
        setFontSize,
        fontSize,
      }}
    >
      {props.children}
    </FontSizeContext.Provider>
  );
}
