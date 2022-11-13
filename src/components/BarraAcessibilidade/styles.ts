import styled from "styled-components";

export const BarraAcessibilidadeContainer = styled.nav`
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
    background-color: ${(props) => props.theme.colors.base100};

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
