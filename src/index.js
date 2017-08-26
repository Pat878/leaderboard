import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LeaderBoard from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<LeaderBoard />, document.getElementById('root'));
registerServiceWorker();
