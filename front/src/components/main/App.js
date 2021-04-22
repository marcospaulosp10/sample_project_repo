import React from 'react'
import Routes from './Routes'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default props => (
  <Container>
        <BrowserRouter>
            <Route component={Routes} />
        </BrowserRouter>
  </Container>
)

