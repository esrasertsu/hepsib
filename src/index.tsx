import App from './App';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import dateFnsLocalizer from 'react-widgets-date-fns';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import { tr } from "date-fns/locale";
import parse from "date-fns/parse";

const locales = {
  "tr": tr
};

dateFnsLocalizer({
  format,
  parse,
  getDay,
  locales
});


ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
