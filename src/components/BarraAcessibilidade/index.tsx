import React, { useState } from "react";
import { CaretDown, CircleHalf, Eye, Minus, Plus } from "phosphor-react";
import Image from "next/image";
import { useFontSize } from "../../hooks/useFontSIze";
import { BarraAcessibilidadeContainer } from "./styles";
import { useStyles } from "../../hooks/useStyles";

export default function BarraAcessibilidade() {
  const { fontSize, setFontSize } = useFontSize();
  const { highContrast, setHighContrast, setColorBlind } = useStyles();
  const [dropdown, setDropdown] = useState(false);

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
        <div className="dropdown">
          <button
            className="menu-btn"
            aria-label="Selecione seu tipo de daltonismo"
            onClick={() => setDropdown((state) => !state)}
          >
            <Eye size={24} />
            <span>Modo daltônico</span>
            <CaretDown size={24} />
          </button>

          <div className={`dropdown-content ${!dropdown ? "disable" : ""}`}>
            <button onClick={() => setColorBlind("deuteranomaly")}>
              Deuteranomalia
            </button>
            <button onClick={() => setColorBlind("deuteranopia")}>
              Deuteranopia
            </button>
            <button onClick={() => setColorBlind("protanomaly")}>
              Protanomalia
            </button>
            <button onClick={() => setColorBlind("protanopia")}>
              Protanopia
            </button>
            <button onClick={() => setColorBlind("deuteranomaly")}>
              Deuteranomalia
            </button>
            <button onClick={() => setColorBlind("deuteranopia")}>
              Deuteranopia
            </button>
            <button onClick={() => setColorBlind("Achromatomaly")}>
              Acrotomalia
            </button>
            <button onClick={() => setColorBlind("Achromatopsia")}>
              Acromatopsia
            </button>
            <button onClick={() => setColorBlind("none")}>Nenhum</button>
          </div>
        </div>

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
