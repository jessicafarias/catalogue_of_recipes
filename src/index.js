import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={App} />
      <Route path="/show" component={App} />

    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
