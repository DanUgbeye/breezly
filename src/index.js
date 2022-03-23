import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <App /> } >
        <Route index element={<div>This is the Index Route</div>} />
        <Route path='news' element={<div>This is the News Route</div>} />
        <Route path='motivation' element={<div> THis is the Motivation Route</div>} />
      </Route>
    </Routes>
      
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
