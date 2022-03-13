import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { string } from 'yup';

interface TextProps {
  className?: string;
  size?:
  | 'big'
  | 'header'
  | 'normal'
  | 'small'
  ;
  align?:
  |'left'
  |'center'
  |'right'
  ;
  color?:
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'black';
  children?: ReactNode;
  onClick?:any;
}

const TextWrapper = styled.span`
      
      &.text {
        width: 100%;

        &-black {
          color:  ${({ theme }) => theme.palette.black};
        }

        &-primary {
          color:  ${({ theme }) => theme.palette.primary};
        }
        
        &-secondary {
          color:  ${({ theme }) => theme.palette.secondary};
        }
        
        &-success {
          color:  ${({ theme }) => theme.palette.success};
        }
        
        &-warning {
          color:  ${({ theme }) => theme.palette.warning};
        }
              
        &-error {
          color:  ${({ theme }) => theme.palette.error};
        }
        
        &-info {
          color: ${({ theme }) => theme.palette.info};
        }
      
        &-big {
          font-size: 2rem;
        }
        &-header{
          font-size: 1.2rem;
        }
        &-normal{
          font-size: 1rem;
        }
      }
      &.text.left {
        text-align:left;
      }
      &.text.center{
        text-align:center;
      }
      &.text.right{
        text-align:right;
      }
`;

const Text: FC<TextProps> = ({
  className = '',
  color = 'secondary',
  size = 'normal',
  align= 'left',
  children,
  onClick,
  ...rest
}) => {
  return (
    <TextWrapper className={'text text-' + color + ' '+ 'text-'+ size + ' ' +className + ' ' + align} {...rest} onClick={onClick}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick:PropTypes.any,
  size: PropTypes.oneOf([
    'big',
    'header',
    'normal',
    'small'
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
    'info',
    'black'
  ])
};

export default Text;
