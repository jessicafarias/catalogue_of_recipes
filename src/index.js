import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Categories from './containers/Categories';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import './index.css';
import Meals from './containers/Meals';
import Navbar from './components/Navbar';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Routes = () => (
  <>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Categories} />
          <Route path="/show/:category" component={Meals} />
          <Route path="/home" component={Categories} />
        </Provider>
      </Switch>
    </BrowserRouter>
  </>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
