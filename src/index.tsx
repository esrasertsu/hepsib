import App from './App';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';

ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
