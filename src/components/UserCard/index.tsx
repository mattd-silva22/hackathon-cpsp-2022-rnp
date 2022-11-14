import * as  Avatar  from '@radix-ui/react-avatar'
import React from 'react'
import styled from 'styled-components'



interface IUserCardsProps {
    name : string,
    id: string,
    img: string,
    email: string
}

const CardContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  .AvatarImage,
  .AvatarFallback {
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }

  

  .user-data {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .user-name {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .user-email {
    font-size: 1.4rem;
  }
`

export default function UserCards(props:IUserCardsProps) {
  return (
    <CardContainer>
        <Avatar.Root className="AvatarRoot">
        <Avatar.Image className="AvatarImage" src={props.img} alt="Colm Tuite" />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          {props.name[0].toLocaleUpperCase()}
        </Avatar.Fallback>
      </Avatar.Root>
    <div className="user-data">
        <p className='user-name'>
            {props.name}
        </p>

        <p className='user-email'>
            {props.email}
        </p>
    </div>
      
    </CardContainer>
  )
}

