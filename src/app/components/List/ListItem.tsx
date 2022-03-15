import { FC, ReactNode } from 'react';
import styled from "styled-components";

interface ListItemProps {
  className?: string;
  children?: ReactNode;
}
//background-color:  ${({ theme }) => theme.backgroundColor};

const ListItemWrapper = styled.div`
    width: 100%;
    display: flex !important;
    flex-direction: row;
    margin: 1em 0;
    width: 100%;
    min-height: 0;
    background: 0 0;
    padding: 5px;
    border: none;
`;

const ListItem: FC<ListItemProps> = ({
  className = '',
  children,
  
  ...rest
}) => {
  return (
    <ListItemWrapper className={className} {...rest}>
      {children}
    </ListItemWrapper>
  );
};

export default ListItem;
