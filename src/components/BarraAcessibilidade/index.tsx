import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  ArrowLeft,
  CaretDown,
  CircleHalf,
  Eye,
  Minus,
  Plus,
} from "phosphor-react";
import Image from "next/image";
import { useFontSize } from "../../hooks/useFontSIze";

interface IBarraAcessibilidadeContainerProps {
  fontSize: string;
}

const BarraAcessibilidadeContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 1.6rem;
  width: 100%;
  border: 1px solid red;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;

  .menu-ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 12px;
  }
  .menu-li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .controle-fonte {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .menu-btn {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(0deg, #e2e1e6, #e2e1e6);

    border: 1px solid #e2e1e6;
    border-radius: 8px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default function BarraAcessibilidade() {
  const { fontSize, setFontSize } = useFontSize();
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
        src="/logo.png"
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
          <button className="menu-btn">
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
