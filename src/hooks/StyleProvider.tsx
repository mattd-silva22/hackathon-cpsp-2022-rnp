import React, { useState } from "react";
import { ThemeProvider, ThemeProps } from "styled-components";
import { GlobalStyled } from "../styles";
import { useFontSize } from "./useFontSIze";

// import { Container } from './styles';

const StyleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { fontSize } = useFontSize();

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

    fontSize: fontSize || "1.6rem",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled fontSize={(fontSize * 0.675) + "%"} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default StyleProvider;
