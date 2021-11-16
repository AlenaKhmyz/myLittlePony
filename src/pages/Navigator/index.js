import React, { useEffect} from 'react';
import {Route, BrowserRouter, Routes, Link, } from 'react-router-dom';
import { ROUTES } from '../../const';


import DragAndDropPage from '../DragAndDrop';

function Navigator() {

  return (
    <BrowserRouter>
      <nav className = 'navbar'>
        <Link to = {ROUTES.DRAGANDDROP} className = 'link'>Drag and Drop</Link>  
      </nav>
      <Routes>
        <Route path={ROUTES.DRAGANDDROP} element={<DragAndDropPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigator