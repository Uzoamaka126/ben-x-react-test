import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import dependencies
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Setup the store
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import * as reducers from '../src/state/reducers/appReducer'

const totalReducer= combineReducers({
    gifs: reducers.appReducer
});

const store = createStore(
    totalReducer,
    compose(
        applyMiddleware(thunk, logger
            ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
    )
);

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
document.getElementById('root'));