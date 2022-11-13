import {
  CornersOut,
  HandPalm,
  Microphone,
  MicrophoneSlash,
  Monitor,
  PhoneSlash,
  TextAa,
  VideoCamera,
  VideoCameraSlash,
} from "phosphor-react";
import React, { useState } from "react";
import { useStyles } from "../../hooks/useStyles";
import { VideoControllerContainer } from "./styles";

export default function VideoController() {
  const { highContrast } = useStyles();
  const [isMicActive,setIsMicAcitve] = useState(false)

  const [isCameraActive,setIsCameraActive] = useState(false)

  const [isHandUp, setIsHandUp] = useState(false)

  function handleActiveMicBtnClick() {
    setIsMicAcitve(!isMicActive)
  }

  function handleActiveCameraBtnClick() {
    setIsCameraActive(!isCameraActive)
  }

  function handleHandUpBtnClick() {
    setIsHandUp(!isHandUp)
  }

  return (
    <VideoControllerContainer>
      <div className="conference-menu">
        <button className={`menu-item`} onClick={handleActiveMicBtnClick}>
          <p className={` icon ${isMicActive? "mic-on" : "mic-off"}`}>
            {isMicActive?  
              <Microphone size={24} color={highContrast || isMicActive ? "#fff" : "#000"} /> 
              : 
              <MicrophoneSlash size={24} color={ highContrast   ? "#fff" : "#000"}/>
            }

            
          </p>

          <p>Microfone</p>
        </button>

        <button className="menu-item" onClick={handleActiveCameraBtnClick}>
          <p className={` icon ${isCameraActive? "cam-on" : "cam-off"}`}>
            {isCameraActive? <VideoCamera size={24} color={highContrast || isCameraActive ? "#fff" : "#000"} />  
              :  
              <VideoCameraSlash size={24} color={highContrast ? "#fff" : "#000"} />  }
            
          </p>

          <p>Câmera</p>
        </button>

        <button className="menu-item">
          <p className="icon">
            <TextAa size={24} color={highContrast ? "#fff" : "#000"} />
          </p>

          <p>Legendas</p>
        </button>

        <button className="menu-item">
          <p className="icon">
            <CornersOut size={24} color={highContrast ? "#fff" : "#000"} />
          </p>

          <p>Tela Cheia</p>
        </button>

        <button className="menu-item">
          <p className="icon">
            <Monitor
              size={24}
              color={highContrast ? "#fff" : "#000"}
              weight="bold"
            />
          </p>

          <p>Apresentar</p>
        </button>

        <button className="menu-item" onClick={handleHandUpBtnClick}>
          <p className={` icon ${isHandUp? "hand-on" : "hand-off"}`}>
            <HandPalm size={24} color={highContrast || isHandUp ? "#fff" : "#000"} />
          </p>

          <p> {isHandUp? "Abaixar a mão" : "Levantar a mão"}</p>
        </button>

        <button className="menu-item leave-room resp">
          <p className="icon">
            <PhoneSlash size={24} color="#fff" />
          </p>

          <p>Sair da Chamada</p>
        </button>
      </div>

      <button className="menu-item leave-room">
        <p className="icon">
          <PhoneSlash size={24} color="#fff" />
        </p>

        <p>Sair da Chamada</p>
      </button>
    </VideoControllerContainer>
  );
}
