import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

interface BoxProps {
  className?: string;
  children?: ReactNode;
}
//background-color:  ${({ theme }) => theme.backgroundColor};

const BoxWrapper = styled.div`
      background-color: #e9e9e9;
      padding: 20px;
      font-size: 13px;
      border-radius: 3px;
      display: inline-flex;
      align-items: center;
      justify-content: center;   
      border: 1px solid #ababab;
      transition: box-shadow .1s ease,-webkit-box-shadow .1s ease;
`;

const Box: FC<BoxProps> = ({
  className = '',
  children,
  
  ...rest
}) => {
  return (
    <BoxWrapper className={className} {...rest}>
      {children}
    </BoxWrapper>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Box;
