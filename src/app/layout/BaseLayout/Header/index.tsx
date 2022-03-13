import { useContext } from 'react';
import styled from "styled-components";

const HeaderWrapper =  styled.div `
        height: 70px;
        padding: 10px;
        right: 0;
        z-index: 5;
        top:0;
        display:flex;
        flex-direction:row;
        justfy-content:space-between;
        background-color:  ${({ theme }) => theme.backgroundColor};
        box-shadow: 0 3px 7px 0 #d4d4d5;
        border-bottom:1px solid gray;
        position: fixed;
        justify-content: space-between;
        width: 100%;
`;

function Header() {

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <div>HepsiBurada.com</div>
      <div>Link Vote Challange</div>
    </HeaderWrapper>
  );
}

export default Header;
