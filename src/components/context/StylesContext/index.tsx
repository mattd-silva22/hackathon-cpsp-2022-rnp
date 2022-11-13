import { createContext, ReactNode, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useFontSize } from "../../../hooks/useFontSIze";
import { GlobalStyled } from "../../../styles";
import blinder from "color-blind";

interface IStylesContext {
  highContrast: boolean;
  setHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
  setColorBlind: React.Dispatch<React.SetStateAction<ColorBlindTypes>>;
}
interface IStylesProviderProps {
  children: ReactNode;
}

export type ColorBlindTypes =
  | "none"
  | "protanomaly"
  | "protanopia"
  | "deuteranomaly"
  | "deuteranopia"
  | "Achromatopsia"
  | "Achromatomaly"
  | "Tritanopia"
  | "Tritanomaly";

export const StylesContext = createContext({} as IStylesContext);

export function StylesProvider(props: IStylesProviderProps) {
  const { fontSize } = useFontSize();

  const [highContrast, setHighContrast] = useState(false);
  const [colorBlind, setColorBlind] = useState<ColorBlindTypes>("none");

  const theme = {
    colors: {
      base150: "#F4F4F5",
      base200: "#E2E1E6",
      base100: "#ffffff",
      danger: "#e23645",
      success: "#008F66",
      warning: "#EDB507",
      info: "#1a3c8a",
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
      info: "#1a3c8a",
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
        setColorBlind,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <GlobalStyled
          fontSize={fontSize * 0.675 + "%"}
          textColor={currentTheme.colors.black}
          filter={colorBlind}
        />
        {props.children}
      </ThemeProvider>
    </StylesContext.Provider>
  );
}
