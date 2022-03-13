import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import Header from './Header';

interface BaseLayoutProps {
  children?: ReactNode;
}



const MainWrapper = styled.div`
        flex: 1 1 auto;
        display: flex;
        height: 100%;
`;
const MainContent = styled.div`
        margin-top: 50px;
        flex: 1 1 auto;
`;

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <>
    <MainWrapper>
        <Header />
        <MainContent>
           {children || <Outlet />}
        </MainContent>
      </MainWrapper>
    </>;
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
