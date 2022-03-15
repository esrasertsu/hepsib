import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import Menu from './Menu';

interface BaseLayoutProps {
  children?: ReactNode;
}



const MainWrapper = styled.div`
        height: 100%;
`;
const MainContent = styled.div`
        width:100%;
        margin-top:90px;
        padding-bottom:50px;
`;

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <>
    <MainWrapper>
        <Menu />
        <MainContent>
           {children || <Outlet />}
        </MainContent>
      </MainWrapper>
    </>;
};

export default BaseLayout;
