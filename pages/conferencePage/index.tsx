import React from "react";
import styled from "styled-components";
import VideoContent from "../../src/components/VideoContent";

import BarraAcessibilidade from "../../src/components/BarraAcessibilidade";
import ChatTab from "../../src/components/ChatTab";

export default function ConferencePage() {
  return (
    <ConferencePageContainer>
      <ConferencePageContent>
        <BarraAcessibilidade />
        <div className="page-content">
          <main className="conference-area">
            <VideoContent />
          </main>
          <section className="chat">
            <ChatTab />
          </section>
        </div>
        

        
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
  flex-direction: column;
  gap: 16px;
  width: 95%;

  border: 1px solid blue;
  max-width: 100%;
  .page-content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }

  .conference-area {
    display: flex;
    align-items: center;
    justify-content:center ;
  }
`;
