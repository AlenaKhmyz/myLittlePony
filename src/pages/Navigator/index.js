import React, { useEffect} from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import { ROUTES } from '../../const';
import './styles.css';

import DragAndDropPage from '../DragAndDrop';

function Navigator() {

  return (
    <BrowserRouter>
      <nav className = 'navbar'>
        <Link to = {ROUTES.DRAGANDDROP} className = 'link'>Drag and Drop</Link>  
      </nav>
      <Switch>
        <Route path={ROUTES.DRAGANDDROP} component={DragAndDropPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigator