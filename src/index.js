import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from "@mui/styles/ThemeProvider";
import {theme} from './utils/style'
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,301,300,600,400,700&display=swap" rel="stylesheet"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
