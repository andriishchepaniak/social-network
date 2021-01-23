import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderTree = (state) => {
    ReactDOM.render (<React.StrictMode>
        <App dispatch={store.dispatch.bind(store)} state={state}/>
    </React.StrictMode>, document.getElementById('root'));
}

rerenderTree(store.getState());
store.subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
