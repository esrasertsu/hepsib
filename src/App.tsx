import { useRoutes } from 'react-router-dom';
import routes from './router';

import {LightThemeSettings} from './app/theme/LightTheme';
import { Fragment, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './app/layout/GlobalStyle';
import './app/layout/styles.scss';
import { RootStoreContext } from './app/stores/rootStore';
import Modal from './app/components/Modal';
import Toast from './app/components/Toast';

const App = () => {

  const content = useRoutes(routes());

  const rootStore = useContext(RootStoreContext);
  const { loadLinks } = rootStore.linkStore;
 
 useEffect(() => {
  loadLinks();
 }, [])
 

  return (
    <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={LightThemeSettings["light"]}>
      <Modal />
      {content}
    </ThemeProvider>
  </Fragment>
  );
}
export default (observer(App));
