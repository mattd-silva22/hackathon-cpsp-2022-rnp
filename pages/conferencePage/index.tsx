import React from "react";
import styled from "styled-components";
import VideoContent from "../../src/components/VideoContent";

export default function ConferencePage() {
  return (
    <ConferencePageContainer>
      <ConferencePageContent>
        <main className="conference-area">
          <nav className="barra-de-acessibilidade">
            <h1>teste</h1>
          </nav>

          <section className="conference-room-section">
            <VideoContent />

            <nav className="conference-controller-menu">oi</nav>
          </section>
        </main>

        <section className="aside-menu">
          <h1>oi lado</h1>
        </section>
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
`;

const ConferencePageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;

  background-color: red;

  .aside-menu {
    background-color: blue;
  }
`;
