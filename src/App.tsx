import { useRoutes } from 'react-router-dom';
import routes from './router';

import {LightThemeSettings} from './app/theme/LightTheme';
import { Fragment, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from "styled-components";
import {
  ModalButtonWrapper,
  ModalContent,
  ModalParagraph,
  ModalTitle,
  ModalWrapper
} from "./app/components/Modal";
import GlobalStyle from './app/layout/GlobalStyle';
import './app/layout/styles.scss';
import { RootStoreContext } from './app/stores/rootStore';

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
      {content}
      {/* <ModalWrapper>
        <CloseIcon />
        <ModalContent>
          <CommentIcon />
          <ModalTitle>Reply to join the conversation.</ModalTitle>
          <ModalParagraph>
            Once you join Twitter, you can respond to Yasin Softaoğlu's Tweet
          </ModalParagraph>
          <ModalButtonWrapper>
            <Button type="primary">Log in</Button>
            <Button type="secondary" onClick={setTheme}>
              Set {newTheme} Theme
            </Button>
          </ModalButtonWrapper>
        </ModalContent>
      </ModalWrapper> */}
    </ThemeProvider>
  </Fragment>
  );
}
export default (observer(App));
