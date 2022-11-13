import React from "react";
import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import { useSpeechSynthesis } from "react-speech-kit";

interface MessageProps {
  text: string;
  imgUrl: string;
  userName: string;
}

const Message: React.FC<MessageProps> = ({ text, imgUrl, userName }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <Container>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image className="AvatarImage" src={imgUrl} alt="Colm Tuite" />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          {userName[0].toLocaleUpperCase()}
        </Avatar.Fallback>
      </Avatar.Root>

      <button
        className="message-text"
        onClick={() => speak({ text: userName + "disse: - " + text })}
      >
        {text}
      </button>
    </Container>
  );
};

export default Message;

export const Container = styled.div`
  display: flex;
  gap: 8px;

  .AvatarImage,
  .AvatarFallback {
    width: 45px;
    height: 45px;
    border-radius: 100%;
  }

  .message-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;

    width: 100%;

    background: ${({ theme }) => theme.colors.base150};
    border-radius: 8px;
  }
`;
