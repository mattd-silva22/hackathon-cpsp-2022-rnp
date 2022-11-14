import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  background: ${(props) => props.theme.colors.base100};
  border: 1px solid ${(props) => props.theme.colors.base200};
  border-radius: 8px;

  position: sticky;
  top: 32px;
  overflow: hidden;
  min-width: 450px;

  .chat-tab_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;

    width: 100%;

    background: ${(props) => props.theme.colors.base150};

    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: ${(props) => props.theme.colors.black};
  }

  .message-container {
    width: 100%;
    padding: 0 8px;
    padding-bottom: 16px;
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    margin-top: 8px;

    overflow-y: scroll;
  }

  .input-container {
    width: 100%;
    display: flex;
    gap: 8px;
    padding: 8px;

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px;
      gap: 8px;
      flex: 1;
      width: 100%;

      background: ${({ theme }) => theme.colors.base100};

      border: 1px solid #7e7c8a;
      border-radius: 8px;
    }

    button {
      display: flex;
      gap: 4px;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      cursor: pointer;

      background: ${({ theme }) => theme.colors.info};

      border: 1px solid ${({ theme }) => theme.colors.base200};
      border-radius: 8px;
      &:hover {
        opacity: 0.8;
      }

      p {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 32px;

        color: #f4f4f5;
      }
    }
  }

  .content-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    flex: 1;
  }

  .content-users {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    position: sticky;
    overflow: hidden;
    width: 100%;
    flex: 1;
    top: 32px;
    min-width: 450px;
    padding: 32px 16px;
    gap: 16px;
  }

  .navbar-aside-area {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    button {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.base150};
      padding: 16px;
      cursor: pointer;

      font-weight: 700;
      font-size: 1.6rem;
      line-height: 24px;

      color: ${({ theme }) => theme.colors.black};

      &.active {
        color: ${({ theme }) => theme.colors.base100};
        background-color: ${({ theme }) => theme.colors.info};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.base100};
        background-color: ${({ theme }) => theme.colors.info};
        opacity: 0.3;
      }
    }
  }
`;
