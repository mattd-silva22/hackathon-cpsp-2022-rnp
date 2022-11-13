import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

interface GlobalStyledProps {
  fontSize: string;
  textColor: string;
}

export const GlobalStyled = styled.createGlobalStyle<GlobalStyledProps>`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    border: 0px;

    transition: all 0.2s;
    font-family: "Open Sans";
    color: ${({ textColor }) => textColor};
  }

  html {
    font-size: ${({ fontSize }) => fontSize};
  }
`;
