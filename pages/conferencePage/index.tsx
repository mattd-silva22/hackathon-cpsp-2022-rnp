
import React from "react";
import styled from "styled-components";
import VideoContent from "../../src/components/VideoContent";

import BarraAcessibilidade from '../../src/components/BarraAcessibilidade'


export default function ConferencePage() {
  return (
    <ConferencePageContainer>
        <ConferencePageContent>
            <main className="conference-area">

                <BarraAcessibilidade/>

                <header className="conference-room-header">
                    <h1> Lorem ipsum dolor sit amet consectetur| room 312 </h1>
                </header>


                <section className="conference-room-section">

                    <nav className="conferece-room-controller-top">
                        oi 2 
                    </nav>

                    <video src="">
                        video aqui
                    </video>

                    <nav className='conference-controller-menu'>
                        oi
                    </nav>

                </section>

            </main>

            <section className="aside-menu">
                <h1>
                    oi lado
                </h1>
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

  border: 1px solid blue;

  main {
    width: 100%;
  }

  

  .aside-menu {
    background-color: blue;
  }
`;
