import {  CornersOut, HandPalm, Microphone, Monitor, TextAa, VideoCamera } from 'phosphor-react'
import React from 'react'
import { VideoControllerContainer } from './styles'

export default function VideoController() {
  return (
    <VideoControllerContainer>
        <ul>
            <li className='menu-item'>
                <Microphone size={32} color="#000" />

                <span>
                    Microfone 
                </span>
            </li>

            <li className='menu-item'>
                <VideoCamera size={32} color="#000" />

                <span>
                    Câmera
                </span>
            </li>

            <li className='menu-item'>
                <TextAa size={32} color="#000" />

                <span>
                    Legendas
                </span>
            </li>

            <li className='menu-item'>
                <CornersOut size={32} color="#000" />

                <span>
                    Tela Cheia
                </span>
            </li>

            <li className='menu-item'>
                <Monitor size={32} color="#000" />

                <span>
                    Apresentar
                </span>
            </li>

            <li className='menu-item'>
                <HandPalm size={32} color="#000" />

                <span>
                    Levantar a mão
                </span>
            </li>
        </ul>
    </VideoControllerContainer>
  )
}
