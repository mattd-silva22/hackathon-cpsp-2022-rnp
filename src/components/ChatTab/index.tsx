import React, { useState } from "react";
import styled from "styled-components";
import Message from "../Message";

const messages = [
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 2,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
];

type tabs = "Mensagens" | "Participantes";

const ChatTab = () => {
  const [title, setTitle] = useState<tabs>("Mensagens");

  return (
    <Container>
      <div className="chat-tab_header">{title}</div>
      <div className="message-container">
        {messages.map((message, index) => (
          <Message
            key={message.user.id + index}
            imgUrl={message.user.img}
            text={message.text}
            userName={message.user.name}
          />
        ))}
      </div>
      <div className="navbar-aside-area">
        <button className={title === "Mensagens" ? "active" : undefined}>
          Participantes
        </button>

        <button className={title === "Participantes" ? "active" : undefined}>
          Mensagens
        </button>
      </div>
    </Container>
  );
};

export default ChatTab;

export const Container = styled.div`
  position: sticky;
  top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 100%;

  background: ${(props) => props.theme.colors.base100};
  border: 1px solid ${(props) => props.theme.colors.base200};
  border-radius: 8px;
  overflow: hidden;
  height: calc(100vh - 64px);
  flex: 1;
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

    justify-content: flex-end;
    overflow-y: scroll;
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

      font-weight: 700;
      font-size: 1.6rem;
      line-height: 24px;

      color: ${({ theme }) => theme.colors.black};

      &.active {
        color: ${({ theme }) => theme.colors.base100};
        background-color: ${({ theme }) => theme.colors.info};
      }
    }
  }
`;
