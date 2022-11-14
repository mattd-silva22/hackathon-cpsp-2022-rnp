import styled from "styled-components";

export const BarraAcessibilidadeContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1366px) {
    & {
      flex-direction: column;
    }
  }

  .menu-ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    width: 100%;
    grid-gap: 8px;
  }

  .menu-btn {
    width: 100%;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${(props) => props.theme.colors.base100};

    border: 1px solid ${(props) => props.theme.colors.base200};
    border-radius: 8px;

    .icons {
      width: 24px;
    }

    p {
      white-space: nowrap;

      font-weight: 600;
      line-height: 3.2rem;
      font-size: 1.4rem;
    }

    @media (max-width: 1366px) {
      & {
        font-size: 1rem;
        padding: 4px 8px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    position: absolute;

    bottom: -450px;
    left: 0;
    z-index: 99;

    background-color: ${(props) => props.theme.colors.base200};
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 100%;

    border-radius: 8px;
    overflow: hidden;

    &.disable {
      display: none;
    }

    button {
      padding: 8px;
      background-color: ${(props) => props.theme.colors.base100};
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 32px;
      color: ${(props) => props.theme.colors.black};
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.colors.base200};
      }
    }
  }
`;
