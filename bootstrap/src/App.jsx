import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Left from './Left';
import Right from './Right';

const Layout = () => {
  return (
    <>
    <div className="container-fluid   w-100%">
    <Header/>
    </div>
    <div className="main-section">
    <div className="row">
      <div className="col-7 "><Left/></div>
      <div className="col-5"><Right/></div>

    </div>
    </div>
    </>
  );
};

export default Layout;
