import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/error.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
