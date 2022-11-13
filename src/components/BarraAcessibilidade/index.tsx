import React from "react";
import { CaretDown, CircleHalf, Eye, Minus, Plus } from "phosphor-react";
import Image from "next/image";
import { useFontSize } from "../../hooks/useFontSIze";
import { BarraAcessibilidadeContainer } from "./styles";
import { useStyles } from "../../hooks/useStyles";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function BarraAcessibilidade() {
  const { fontSize, setFontSize } = useFontSize();
  const { highContrast, setHighContrast } = useStyles();

  function handleChangeFontSize(currentFontSize: number, operation: string) {
    if (operation === "-" && currentFontSize > 100) {
      setFontSize(currentFontSize - 10);
    }

    if (operation === "+" && currentFontSize < 150) {
      setFontSize(currentFontSize + 10);
    }
  }

  return (
    <BarraAcessibilidadeContainer>
      <Image
        src={highContrast ? "/logo-highContrast.png" : "/logo.png"}
        alt="logo web conferencia"
        width={257}
        height={48}
      />

      <div className="menu-ul">
        <button
          className="menu-btn"
          aria-label="Selecione seu tipo de daltonismo"
        >
          <Eye size={24} />
          <span>Modo daltônico</span>
          <CaretDown size={24} />
        </button>

        <button
          className="menu-btn"
          onClick={() => setHighContrast((state) => !state)}
        >
          <CircleHalf size={24} weight={"fill"} />
          <span>Alto contraste</span>
        </button>

        <button
          className="menu-btn"
          onClick={() => {
            handleChangeFontSize(fontSize, "+");
          }}
        >
          <Plus size={24} />
          <span>Aumentar letras</span>
        </button>

        <button
          className="menu-btn"
          onClick={() => {
            handleChangeFontSize(fontSize, "-");
          }}
        >
          <Minus size={24} />
          <span>Diminuir letras</span>
        </button>
      </div>
    </BarraAcessibilidadeContainer>
  );
}
