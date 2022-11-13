import { PaperPlaneTilt } from "phosphor-react";
import React, { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Message from "../Message";
import { messages } from "./mock-messages";
import { Container } from "./styles";

type tabs = "Mensagens" | "Participantes";

const ChatTab = () => {
  const [title, setTitle] = useState<tabs>("Mensagens");
  const [arrMessages, setArrMessages] = useState(
    messages.filter((a, index) => index < 3) as typeof messages
  );

  const [currentPage, setCurrentPage] = useState("msg");
  function handleSwitchPage(page: String) {
    if (page === "msg") {
      setCurrentPage("msg");
      setTitle("Mensagens");
    }

    if (page === "users") {
      setCurrentPage("users");
      setTitle("Participantes");
    }
  }
  const addDelayMessage = useCallback(() => {
    setTimeout(() => {
      const currentIndex = arrMessages.length;

      if (currentIndex < messages.length - 1) {
        const newMessage = messages[currentIndex];
        const newArray = arrMessages.concat(newMessage);
        setArrMessages(newArray);
        addDelayMessage();
      }
    }, 15000);
  }, [arrMessages]);

  useEffect(() => {
    addDelayMessage();
  }, [addDelayMessage]);

  return (
    <Container>
      <div className="chat-tab_header">{title}</div>
      {currentPage === "msg" ? (
        <div className="content-msg">
          <div className="message-container">
            {arrMessages.map((message, index) => (
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
        </div>
      ) : (
        <div className="content-users">oi</div>
      )}

      <div className="navbar-aside-area">
        <button
          className={title === "Mensagens" ? "active" : undefined}
          onClick={() => handleSwitchPage("msg")}
        >
          Mensagens
        </button>

        <button
          className={title === "Participantes" ? "active" : undefined}
          onClick={() => handleSwitchPage("users")}
        >
          Participantes
        </button>
      </div>
    </Container>
  );
};

export default memo(ChatTab);
