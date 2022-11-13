import React from "react";
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
  {
    user: {
      id: 1,
      name: "Ana",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    },
    text: "Professor, pode repetir o último slide?",
  },
];

const ChatTab: React.FC = () => {
  return (
    <Container>
      <div className="chat-tab_header">Mensagens na chamada</div>
      <div className="message-container">
        {messages.map((message) => (
          <Message
            key={message.user.id}
            imgUrl={message.user.img}
            text={message.text}
            userName={message.user.name}
          />
        ))}
      </div>
    </Container>
  );
};

export default ChatTab;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  border: 1px solid #e2e1e6;
  border-radius: 8px;

  min-width: 523px;
  height: 1016px;

  background: ${(props) => props.theme.colors.base100};

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
    padding-bottom: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    justify-content: flex-end;
    overflow-y: hidden;
  }
`;
