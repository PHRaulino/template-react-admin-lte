import React from 'react';
import { NavBar, SideBar, Content, Footer } from '../common/template/index.js'

function App() {
 
  return (
    <div className="wrapper">
      <NavBar />
      <SideBar />
      <Content/>
      <Footer years='2020' company='Alta Renda Select' link='#' version='1.0.0'/>
    </div>
  );
}

export default App;
