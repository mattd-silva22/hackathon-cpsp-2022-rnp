import React from "react";
import { ThemeProvider, ThemeProps } from "styled-components";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = {
    font: {
      size: 16,
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
