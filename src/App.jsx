import React, { useState } from 'react'
import logo from '../src/img/logo/logo512.png';
import Message from './Components/Message';
import ListGroup from './Components/ListGroup';

function App() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">lorem lorem lorem</h1>
      </div>
      <div className="container">
        <Message />
      </div>
      <div className="container">
        <ListGroup />
      </div>
    </>
  )
}

export default App