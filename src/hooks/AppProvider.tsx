import React, { useState } from "react";
import { ThemeProvider, ThemeProps } from "styled-components";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentFontSize , setCurrentFontSize] = useState(100)
  
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

    fontSize: "1.6rem"

    
  };

  const getFontSize = (currentSize:number)=>{
      switch (currentSize) {
        case 100:
          return "1.6rem"
        case 110:
          return "1.8rem"
        case 120:
          return "2.0rem"
        case 130:
          return "2.2rem"
        case 140:
          return "2.4rem"
        case 150:
          return "2.6rem"
      
        default:
          break;
      }
  }

  return <ThemeProvider  theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
