import { useContext } from "react";
import { StylesContext } from "../components/context/StylesContext";

export function useStyles() {
  const value = useContext(StylesContext);
  return value;
}
