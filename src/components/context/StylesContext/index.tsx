import { createContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useFontSize } from "../../../hooks/useFontSIze";
import { GlobalStyled } from "../../../styles";

interface IStylesContext {
  highContrast: boolean;
  setHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IStylesProviderProps {
  children: ReactNode;
}

export const StylesContext = createContext({} as IStylesContext);

export function StylesProvider(props: IStylesProviderProps) {
  const { fontSize } = useFontSize();

  const [highContrast, setHighContrast] = useState(false);

  const theme = {
    colors: {
      base150: "#F4F4F5",
      base200: "#E2E1E6",
      base100: "#ffffff",
      danger: "#e23645",
      success: "#008F66",
      warning: "#EDB507",
      info: "#0061EA",
      black: "#2f2e33",
    },

    fontSize: fontSize + "%" || "1.6rem",
  };

  const highTheme = {
    colors: {
      base150: "#201F23",
      base200: "#2F2E33",
      base100: "#19181B",
      danger: "#e23645",
      success: "#008F66",
      warning: "#EDB507",
      info: "#0061EA",
      black: "#ffffff",
    },

    fontSize: fontSize + "%" || "1.6rem",
  };

  const currentTheme = highContrast ? highTheme : theme;

  return (
    <StylesContext.Provider
      value={{
        setHighContrast,
        highContrast,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <GlobalStyled
          fontSize={currentTheme.fontSize}
          textColor={currentTheme.colors.black}
        />
        {props.children}
      </ThemeProvider>
    </StylesContext.Provider>
  );
}
