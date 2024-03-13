import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Views/Homepage';


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
