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

      <div className="menu-ul daltonico">
        <div className="dropdown">
          <button
            className="menu-btn"
            aria-label="Selecione seu tipo de daltonismo"
            onClick={() => setDropdown((state) => !state)}
          >
            <Eye size={24} />
            <p>Modo daltônico</p>
            <CaretDown
              size={24}
              style={{
                ...(dropdown && { transform: "rotate(-180deg)" }),
                transition: "all 0.2s",
              }}
            />
          </button>

          <div className={`dropdown-content ${!dropdown ? "disable" : ""}`}>
            <button
              onClick={() => {
                setColorBlind("deuteranomaly");
                setDropdown(false);
              }}
            >
              Deuteranomalia
            </button>
            <button
              onClick={() => {
                setColorBlind("deuteranopia");
                setDropdown(false);
              }}
            >
              Deuteranopia
            </button>
            <button
              onClick={() => {
                setColorBlind("protanomaly");
                setDropdown(false);
              }}
            >
              Protanomalia
            </button>
            <button
              onClick={() => {
                setColorBlind("protanopia");
                setDropdown(false);
              }}
            >
              Protanopia
            </button>
            <button
              onClick={() => {
                setColorBlind("deuteranomaly");
                setDropdown(false);
              }}
            >
              Deuteranomalia
            </button>
            <button
              onClick={() => {
                setColorBlind("deuteranopia");
                setDropdown(false);
              }}
            >
              Deuteranopia
            </button>
            <button
              onClick={() => {
                setColorBlind("Achromatomaly");
                setDropdown(false);
              }}
            >
              Acrotomalia
            </button>
            <button
              onClick={() => {
                setColorBlind("Achromatopsia");
                setDropdown(false);
              }}
            >
              Acromatopsia
            </button>
            <button
              onClick={() => {
                setColorBlind("none");
                setDropdown(false);
              }}
            >
              Nenhum
            </button>
          </div>
        </div>

        <button
          className="menu-btn"
          onClick={() => {
            setHighContrast((state) => !state);
            setDropdown(false);
          }}
        >
          <CircleHalf size={24} weight={"fill"} />
          <p>Alto contraste</p>
        </button>

        <button
          className="menu-btn"
          onClick={() => {
            handleChangeFontSize(fontSize, "+");
            setDropdown(false);
          }}
        >
          <Plus size={24} />
          <p>Aumentar letras</p>
        </button>

        <button
          className="menu-btn"
          onClick={() => {
            handleChangeFontSize(fontSize, "-");
          }}
        >
          <Minus size={24} />
          <p>Diminuir letras</p>
        </button>
      </div>
    </BarraAcessibilidadeContainer>
  );
}
