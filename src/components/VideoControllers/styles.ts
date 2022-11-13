import styled from "styled-components";



export const VideoControllerContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 160px;

    

    ul {
        display: flex ;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 80px;
        flex-wrap: warp;
    }

    .menu-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;

        &:hover {
            cursor: pointer;
        }

        .icon {
            border: 1px solid ${({ theme }) => theme.colors.base300} ; 
            border-radius: 5px;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        

        p {
            font-size: 1.4rem;
            white-space: nowrap;
            font-weight: 600;
        }
    }

    .leave-room {
        .icon {
            background-color: ${({ theme }) => theme.colors.danger};
        }
        
    }







`