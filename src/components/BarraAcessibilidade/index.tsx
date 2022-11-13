import React from "react";
import { CaretDown, CircleHalf, Eye, Minus, Plus } from "phosphor-react";
import Image from "next/image";
import { useFontSize } from "../../hooks/useFontSIze";
import { BarraAcessibilidadeContainer } from "./styles";
import { useStyles } from "../../hooks/useStyles";

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

      <ul className="menu-ul">
        <li className="menu-li">
          <button className="menu-btn">
            <Eye size={32} />
            <span>Modo daltônico</span>
            <CaretDown size={32} />
          </button>
        </li>

        <li className="menu-li">
          <button
            className="menu-btn"
            onClick={() => setHighContrast((state) => !state)}
          >
            <CircleHalf size={32} weight={"fill"} />
            <span>Alto contraste</span>
          </button>
        </li>

        <li className="menu-li">
          <nav className="controle-fonte">
            <button
              className="menu-btn"
              onClick={() => {
                handleChangeFontSize(fontSize, "+");
              }}
            >
              <Plus size={32} />
              <span>Aumentar letras (10%)</span>
            </button>

            <span>{fontSize}%</span>

            <button
              className="menu-btn"
              onClick={() => {
                handleChangeFontSize(fontSize, "-");
              }}
            >
              <Minus size={32} />
              <span>Diminuir Letras (10%)</span>
            </button>
          </nav>
        </li>
      </ul>
    </BarraAcessibilidadeContainer>
  );
}
