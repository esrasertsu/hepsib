import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import BaseLayout from 'src/app/layout/BaseLayout';

import SuspenseLoader from 'src/app/components/SuspenseLoader';


const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// List Pages
const ListVotes = Loader(lazy(() => import('src/content/pages/Votes/List')));
const AddVotes = Loader(lazy(() => import('src/content/pages/Votes/New')));


const routes = () => [
  {
    path: '*',
    element:  <BaseLayout /> ,
    
    children: [
      {
        path: '/',
        element:<Navigate
        to="/votes/list"
        replace
      />
      },
      {
        path: '*',
        element: <Navigate
        to="/votes/list"
        replace
      />
      },
    ]
  },
  {
    path: 'votes',
    element:  <BaseLayout /> ,
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/votes/list"
            replace
          />
        )
      },
      {
        path: 'list',
        element: <ListVotes />
      },
      {
        path: 'new',
        element: <AddVotes />
      }
    ]
  }
];

export default routes;
