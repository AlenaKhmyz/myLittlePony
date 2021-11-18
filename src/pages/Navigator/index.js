import React, { useEffect} from 'react';
import {Route, BrowserRouter, Routes, Link, } from 'react-router-dom';
import { ROUTES } from '../../const';

import DragAndDropPage from '../DragAndDrop';
import MainPage from '../Main';
import AudioPlayerPage from '../AudioPlayer';

function Navigator() {

  return (
    <BrowserRouter>
      <nav className = 'navbar'>
        <Link to = {ROUTES.DRAGANDDROP} className = 'link'>Drag and Drop</Link>
        <Link to = {ROUTES.AUDIOPLAYER} className = 'link'>Audio Player</Link>
      </nav>
      <Routes>
        <Route path={ROUTES.DRAGANDDROP} element={<DragAndDropPage />} />
        <Route path={ROUTES.AUDIOPLAYER} element={<AudioPlayerPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigator