import { PaperPlaneTilt } from "phosphor-react";
import React, { useState } from "react";
import styled from "styled-components";
import Message from "../Message";
import { messages } from "./mock-messages";
import { Container } from "./styles";

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

      <div className="input-container">
        <input placeholder="Digite uma mensagem" />
        <button>
          <p>Enviar</p>
          <PaperPlaneTilt size={20} color={"#fff"} />
        </button>
      </div>

      <div className="navbar-aside-area">
        <button
          className={title === "Mensagens" ? "active" : undefined}
          onClick={() => setTitle("Mensagens")}
        >
          Mensagens
        </button>

        <button
          className={title === "Participantes" ? "active" : undefined}
          onClick={() => setTitle("Participantes")}
        >
          Participantes
        </button>
      </div>
    </Container>
  );
};

export default ChatTab;
