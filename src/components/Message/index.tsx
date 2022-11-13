import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import { useSpeechSynthesis } from "react-speech-kit";
import useSound from "use-sound";

// import plim from "./plim.mp3";

interface MessageProps {
  text: string;
  imgUrl: string;
  userName: string;
}

const Message: React.FC<MessageProps> = ({ text, imgUrl, userName }) => {
  const { speak } = useSpeechSynthesis();
  const [play] = useSound("/plim.mp3");

  const playText = useCallback(() => {
    play();

    setTimeout(() => {
      speak({ text: userName + "disse: - " + text });
    }, 500);
  }, [play, speak, text, userName]);

  return (
    <Container>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image className="AvatarImage" src={imgUrl} alt="Colm Tuite" />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          {userName[0].toLocaleUpperCase()}
        </Avatar.Fallback>
      </Avatar.Root>

      <button className="message-text" onClick={() => playText()}>
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
    text-align: left;
    background: ${({ theme }) => theme.colors.base150};
    border-radius: 8px;

    font-size: 1.2rem;

    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.base150};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.info};
    }
  }
`;
