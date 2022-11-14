import React from "react";

import VideoContent from "../../src/components/VideoContent";

import BarraAcessibilidade from "../../src/components/BarraAcessibilidade";
import ChatTab from "../../src/components/ChatTab";
import VideoController from "../../src/components/VideoControllers";
import styled from "styled-components";

export const ConferencePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base150};
  padding: 32px;
`;

export const ConferencePageContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 100%;

  .conference-area {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 16px;
    width: 70%;
  }

  .video-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
`;


export default function ConferencePage() {
  return (
    <ConferencePageContainer>
      <ConferencePageContent>
        <main className="conference-area">
          <BarraAcessibilidade />
          <div className="video-area">
            <VideoContent />
            <VideoController />
          </div>
          
        </main>
        <ChatTab />
      </ConferencePageContent>
    </ConferencePageContainer>
  );
}


