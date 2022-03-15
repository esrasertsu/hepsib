import { useRoutes } from 'react-router-dom';
import routes from './router';

import {LightThemeSettings} from './app/theme/LightTheme';
import { Fragment, lazy, Suspense, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './app/layout/GlobalStyle';
import './app/layout/styles.scss';
import { RootStoreContext } from './app/stores/rootStore';
import SuspenseLoader from './app/components/SuspenseLoader';

const App = () => {

  const content = useRoutes(routes());

  const rootStore = useContext(RootStoreContext);
  const { loadLinks, toastList } = rootStore.linkStore;

 useEffect(() => {
  loadLinks();
 }, [])

 const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);


const Modal = Loader(lazy(() => import('./app/components/Modal')));
const Toast = Loader(lazy(() => import('./app/components/Toast')));

 

  return (
    <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={LightThemeSettings["light"]}>
      <Modal />
      <Toast toastList={toastList} />
      {content}
    </ThemeProvider>
  </Fragment>
  );
}
export default (observer(App));
