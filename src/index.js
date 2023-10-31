import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-vant/es/styles';
import { Home } from './routes/homePage';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'react-vant';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ConfigProvider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
