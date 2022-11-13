import styled from "styled-components";

export const VideoControllerContainer = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 16px;

  @media (max-width: 1366px) {
    & {
      justify-content: center;
    }
  }

  .conference-menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, auto));
    width: 100%;
    grid-gap: 8px;
    align-items: flex-start;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    &:hover {
      cursor: pointer;
    }

    .icon {
      border: 1px solid ${({ theme }) => theme.colors.base300};
      border-radius: 5px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 1.4rem;
      /* white-space: nowrap; */
      text-align: center;
      font-weight: 600;
    }
  }

  .leave-room {
    .icon {
      background-color: ${({ theme }) => theme.colors.danger};
    }

    @media (max-width: 1366px) {
      & {
        display: none;
      }
    }
  }
  .mic-on {
    background-color: ${({ theme }) => theme.colors. success};
  }

  .resp {
    display: none;
    @media (max-width: 1366px) {
      & {
        display: flex;
      }
    }
  }
`;
