import { useContext } from 'react';
import styled from "styled-components";

const MenuWrapper =  styled.div `
        height: 70px;
        padding: 10px;
        right: 0;
        z-index: 5;
        top:0;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        background-color:  ${({ theme }) => theme.backgroundColor};
        box-shadow: 0 3px 7px 0 #d4d4d5;
        border-bottom:1px solid gray;
        position: absolute;
        width: 100%;
`;

function Menu() {

  return (
    <MenuWrapper>
      <div>HepsiBurada.com</div>
      <div>Link Vote Challange</div>
    </MenuWrapper>
  );
}

export default Menu;
