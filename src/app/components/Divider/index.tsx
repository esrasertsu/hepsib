import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

interface DividerProps {
  className?: string;
}
//background-color:  ${({ theme }) => theme.backgroundColor};

const DividerWrapper = styled.div`
        border-top: 3px solid rgba(34,36,38,.15);
        border-bottom: 3px solid rgba(255,255,255,.1);
        margin: 1rem 0;
        line-height: 1;
        height: 0;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .05em;
        color: rgba(0,0,0,.85);
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        font-size: 1rem;
`;

const Divider: FC<DividerProps> = ({
  className = '',
  children,
  
  ...rest
}) => {
  return (
    <DividerWrapper className={className} {...rest}>
      {children}
    </DividerWrapper>
  );
};


export default Divider;
