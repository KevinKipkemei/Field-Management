import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import Routes from './Routes'
import {createBrowserHistory} from 'history'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const history = createBrowserHistory ()


ReactDOM.render(<Router history = {history}>
 <Routes/>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
