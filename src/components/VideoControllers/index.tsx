import {
  CornersOut,
  HandPalm,
  Microphone,
  MicrophoneSlash,
  Monitor,
  PhoneSlash,
  TextAa,
  VideoCamera,
} from "phosphor-react";
import React, { useState } from "react";
import { useStyles } from "../../hooks/useStyles";
import { VideoControllerContainer } from "./styles";

export default function VideoController() {
  const { highContrast } = useStyles();
  const [isMicActive,setIsMicAcitve] = useState(false)

  function handleActiveMicBtnClick() {
    setIsMicAcitve(!isMicActive)
  }
  return (
    <VideoControllerContainer>
      <div className="conference-menu">
        <div className={`menu-item`} onClick={handleActiveMicBtnClick}>
          <p className={` icon ${isMicActive? "mic-on" : "mic-off"}`}>
            {isMicActive?  
              <Microphone size={24} color={highContrast ? "#fff" : "#000"} /> 
              : 
              <MicrophoneSlash size={24} color={ highContrast || isMicActive  ? "#fff" : "#000"}/>
            }

            
          </p>

          <p>Microfone</p>
        </div>

        <div className="menu-item">
          <p className="icon">
            <VideoCamera size={24} color={highContrast ? "#fff" : "#000"} />
          </p>

          <p>Câmera</p>
        </div>

        <div className="menu-item">
          <p className="icon">
            <TextAa size={24} color={highContrast ? "#fff" : "#000"} />
          </p>

          <p>Legendas</p>
        </div>

        <div className="menu-item">
          <p className="icon">
            <CornersOut size={24} color={highContrast ? "#fff" : "#000"} />
          </p>

          <p>Tela Cheia</p>
        </div>

        <div className="menu-item">
          <p className="icon">
            <Monitor
              size={24}
              color={highContrast ? "#fff" : "#000"}
              weight="bold"
            />
          </p>

          <p>Apresentar</p>
        </div>

        <div className="menu-item">
          <p className="icon">
            <HandPalm size={24} color={highContrast ? "#fff" : "#000"} />
          </p>

          <p>Levantar a mão</p>
        </div>

        <div className="menu-item leave-room resp">
          <p className="icon">
            <PhoneSlash size={24} color="#fff" />
          </p>

          <p>Sair da Chamada</p>
        </div>
      </div>

      <div className="menu-item leave-room">
        <p className="icon">
          <PhoneSlash size={24} color="#fff" />
        </p>

        <p>Sair da Chamada</p>
      </div>
    </VideoControllerContainer>
  );
}
