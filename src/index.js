import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Popup from './Popup';
import * as serviceWorker from './serviceWorker';

class Home extends Component {
  render() {
	return (
	  <div>
		<Link to={{ pathname: "/Popup" }}>Click</Link>
      </div>
	)
  }
}

const routes = (
  <BrowserRouter>
	<Switch>
	  <Route exact path="/" component={Home} />
	  <Route path="/" component={Popup} />
	</Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
