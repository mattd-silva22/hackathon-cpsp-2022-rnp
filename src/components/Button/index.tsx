import React from "react";

import styled from "styled-components";

interface ButtonProps extends React.PropsWithChildren {
  prefix: any;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ prefix, children, onClick }) => {
  return (
    <Container onClick={onClick}>
      {prefix}
      <p>{children}</p>
    </Container>
  );
};

export default Button;

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  cursor: pointer;

  min-height: 48px;

  background: #ffffff;

  border: 1px solid #e2e1e6;
  border-radius: 8px;

  p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 32px;

    color: ${({ theme }) => theme.colors.black};
  }
`;
