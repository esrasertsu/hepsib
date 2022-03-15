import { FC, ReactNode } from 'react';
import styled from "styled-components";

interface ListProps {
  className?: string;
  children?: ReactNode;
}
//background-color:  ${({ theme }) => theme.backgroundColor};

const ListWrapper = styled.div`
    font-size: 1em;
    list-style-type: none;
    margin: 1em 0;
    padding: 0 10px;
`;

const List: FC<ListProps> = ({
  className = '',
  children,
  
  ...rest
}) => {
  return (
    <ListWrapper className={className} {...rest}>
      {children}
    </ListWrapper>
  );
};

export default List;
