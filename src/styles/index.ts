import { createGlobalStyle } from "styled-components";
import { ColorBlindTypes } from "../components/context/StylesContext";

const styled = { createGlobalStyle };

interface GlobalStyledProps {
  fontSize: string;
  textColor: string;
  filter: ColorBlindTypes;
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

    -webkit-filter: ${({ filter }) =>
      filter === "none" ? "" : "url(filter.svg#" + filter + ")"};
    filter: ${({ filter }) =>
      filter === "none" ? "" : "url(filter.svg#" + filter + ")"};
  }
`;
