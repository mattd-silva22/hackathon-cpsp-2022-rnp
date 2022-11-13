import React from 'react'
import ChatTab from '../ChatTab'
import Message from '../Message'
import { AsideAreaContainer } from './style'

export default function AsideArea() {
  return (
    <AsideAreaContainer>
            

            <section className="section-content">
                <ChatTab title="Mensagens da Turma"/>
            </section>

            <nav className="navbar-aside-area">
                <ul>
                    <li>Participantes</li>

                    <li>Mensagens</li>

                    <li>Notas de Aulas</li>
                </ul>
            </nav>
    </AsideAreaContainer>
  )
}
