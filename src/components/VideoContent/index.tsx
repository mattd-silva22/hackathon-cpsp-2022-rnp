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

          <span className="invite-people">
            <div className="add-icon">
              <Plus size={24} color={"#ffffff"} />
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

  display: flex;
  flex-direction: column;
  gap: 16px;

  border: 1px solid green;

  h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 52px;

    color: ${({ theme }) => theme.colors.black};
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
        background: ${({ theme }) => theme.colors.base150};

        border: 9px solid ${({ theme }) => theme.colors.danger};
        border-radius: 100%;
      }

      .add-icon {
        width: 32px;
        height: 32px;

        background: ${({ theme }) => theme.colors.success};
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      display: flex;
      align-items: center;
      gap: 8px;

      font-weight: 400;
      font-size: 24px;
      line-height: 32px;

      &.invite-people {
        color: ${({ theme }) => theme.colors.success};
      }
    }
  }

  video {
    width: 100%;
    height: auto;
    border-radius: 24px;
  }
`;
