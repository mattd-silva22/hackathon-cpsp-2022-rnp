import React from "react";
import { ThemeProvider, ThemeProps } from "styled-components";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = {
    font: {},
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
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
