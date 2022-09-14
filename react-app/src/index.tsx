import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import './assets/styles/index.scss';
import reportWebVitals from './utils/reportWebVitals';

const $root = document.getElementById('root') as Element
const root = createRoot($root);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
