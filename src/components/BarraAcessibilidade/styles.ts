import styled from "styled-components";

export const BarraAcessibilidadeContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red; */
  color: ${({ theme }) => theme.colors.black};
  flex-wrap: wrap;
  gap: 16px;

  @media(max-width:1366px) {
    &{
      flex-direction: column;
    }
  }

  .menu-ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    flex-wrap: wrap;
    

    border: 1px solid red;
  }
  .menu-li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

 

  .menu-btn {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${(props) => props.theme.colors.base100};

    border: 1px solid ${(props) => props.theme.colors.base200};
    border-radius: 8px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    line-height: 3.2rem;
    font-size: 1.4rem;

    @media(max-width:1366px) {
      &{
        font-size: 1rem;
        padding: 4px 8px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
