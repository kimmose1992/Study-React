import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 
   * <React.StrictMode>
   *
   * React에서 사용하는 잠재적 문제를 검사하기 위한 도구 (일반 JS에선 use strict 가 있음)
   * 정확한 검사를 위해 랜더링을 2번 수행한다. 
   * ※ console 등, 2번 수행되는 경우 해당 모드를 주석처리하면 된다.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
