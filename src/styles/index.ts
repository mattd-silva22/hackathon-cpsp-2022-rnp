import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyled = styled.createGlobalStyle<{ fontSize: string }>`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    border: 0px;

    transition: font-size .2s;
  }

  html {
    font-size: ${({ fontSize }) => fontSize};
    font-family: "Open Sans";
  }
`;
