import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './containers/App';
import Categories from './containers/Categories';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Provider store={store}>

        <Route exact path="/" component={App} />
        <Route path="/home" component={Categories} />
        <Route path="/show" component={App} />
      </Provider>
      ,

    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
