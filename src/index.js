import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle={"Persons List React App"}/>, document.getElementById('root'));
registerServiceWorker();
