import { useContext } from "react";
import { FontSizeContext } from "../components/context/FontSizeContext";

export function useFontSize() {
  const value = useContext(FontSizeContext);
  return value;
}
