import React from "react";
import styled from "styled-components";
import VideoContent from "../../src/components/VideoContent";

import BarraAcessibilidade from "../../src/components/BarraAcessibilidade";
import ChatTab from "../../src/components/ChatTab";

export default function ConferencePage() {
  return (
    <ConferencePageContainer>
      <ConferencePageContent>
        <main className="conference-area">
          <BarraAcessibilidade />

          <VideoContent />
        </main>

        <ChatTab />
      </ConferencePageContent>
    </ConferencePageContainer>
  );
}

const ConferencePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f4f4f5;
  padding: 32px;
`;

const ConferencePageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  border: 1px solid blue;
  max-width: 100%;

  .conference-area {
  }
`;
