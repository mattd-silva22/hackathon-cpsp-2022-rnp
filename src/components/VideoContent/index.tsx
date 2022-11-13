import React from "react";
import styled from "styled-components";
import { Plus } from "phosphor-react";

const VideoContent: React.FC = () => {
  return (
    <Container>
      <h1>Lorem ipsum dolor sit amet consectetur</h1>

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
            <p>Convidar pessoas</p>
          </span>
        </div>
      </div>

      <video controls>
        <source src="videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
};

export default VideoContent;

export const Container = styled.div`
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 52px;

    color: #2f2e33;
  }

  .video-page_container {
    width: 100%;
  }

  .video-container_header {
    display: flex;
    justify-content: space-between;

    span {
      .recording-icon {
        width: 32px;
        height: 32px;
        background: #f4f4f5;

        border: 9px solid #e23645;
      }

      display: flex;
      gap: 8px;
    }
  }

  video {
    width: 100%;
    height: auto;
  }
`;
