/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavBar, SideBar, Footer } from '../common/template';
import Routes from './routes';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <SideBar />
      <Routes />
      <Footer years="2020" company="Alta Renda Select" link="#" version="1.0.0" />
    </div>
  );
}

export default App;
