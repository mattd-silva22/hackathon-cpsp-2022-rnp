import React from "react";

import VideoContent from "../../src/components/VideoContent";

import BarraAcessibilidade from "../../src/components/BarraAcessibilidade";
import ChatTab from "../../src/components/ChatTab";
import { ConferencePageContainer, ConferencePageContent } from "./styles";
import VideoController from "../../src/components/VideoControllers";

export default function ConferencePage() {
  return (
    <ConferencePageContainer>
      <ConferencePageContent>
        
          <main className="conference-area">
            <BarraAcessibilidade />
            <VideoContent />
            <VideoController/>
          </main>
          <section className="aside-area">
            <ChatTab />
          </section>
      </ConferencePageContent>
    </ConferencePageContainer>
  );
}
