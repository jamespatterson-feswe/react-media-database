import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';

import { UtilityService as utilityService } from './media-database/services';
import { MediaDatabase } from './media-database/index';

import './index.scss';

window.onresize = () => {
  utilityService.setScreenWidth(window.innerWidth);
};

const root = document?.getElementById('root');
if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <MediaDatabase />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
