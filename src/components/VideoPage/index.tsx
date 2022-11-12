import React from "react";
import styled from "styled-components";
import { ArrowLeft, Plus } from "phosphor-react";

const VideoPage: React.FC = () => {
  return (
    <Container>
      <div className="video-page_header">
        <button>
          <ArrowLeft size={20} />
          Voltar
        </button>

        <h1>Lorem ipsum dolor sit amet consectetur</h1>
      </div>

      <div className="video-page_container">
        <div className="video-container_header">
          <span>
            <div className="recording-icon" />
            <p>Recording 00:00:00</p>
          </span>

          <span>
            <div className="add-icon">
              <Plus size={20} />
            </div>
            <p>Recording 00:00:00</p>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default VideoPage;

export const Container = styled.div``;
