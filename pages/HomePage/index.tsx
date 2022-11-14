import * as Avatar from "@radix-ui/react-avatar";
import { useRouter } from "next/router";
import { SignIn } from "phosphor-react";
import React from "react";

import styled from "styled-components";

export const Container = styled.div`
  background: url("/home-background.webp");
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 16px;

  img {
    width: 100%;
    max-width: 389px;
    height: auto;
  }

  .home-page_content {
    width: 100%;
    height: 100%;
    max-width: 1078px;
    max-height: 688px;

    background: #ffffff;
    border-radius: 40px;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 32px;
      text-align: center;

      strong {
        color: ${({ theme }) => theme.colors.info};
      }
    }
  }

  .home-page_user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8vh;
  }

  .AvatarImage,
  .AvatarFallback {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 6px solid ${({ theme }) => theme.colors.warning};
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    /* Primary/brandCollor */

    background: ${({ theme }) => theme.colors.info};
    /* base/base200 */

    border: 1px solid #e2e1e6;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    p {
      font-weight: 600;
      font-size: 2rem;
      line-height: 32px;
      /* identical to box height, or 160% */

      /* base/base100 */

      color: ${({ theme }) => theme.colors.base100};
    }
  }
`;

const HomePage: React.FC = () => {
  const { push } = useRouter();
  return (
    <Container>
      <div className="home-page_content">
        <img src="/home-logo.png" alt="Conferia Web" width={389} height={76} />
        <div className="home-page_user">
          <Avatar.Root className="AvatarRoot">
            <Avatar.Image
              className="AvatarImage"
              src={"/ryan2.jpeg"}
              alt="Vitor da Silva Santos"
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              Vitor da Silva Santos
            </Avatar.Fallback>
          </Avatar.Root>

          <h1>
            Bem vindo, <strong>Vitor da Silva Santos!</strong>
          </h1>
        </div>
        <div></div>
        <button onClick={() => push("conference-page")}>
          <SignIn size={32} color="white" />
          <p>Entrar na conferencia</p>
        </button>
      </div>
    </Container>
  );
};

export default HomePage;
