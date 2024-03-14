import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Views/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route element={<Homepage />} path="/" />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
