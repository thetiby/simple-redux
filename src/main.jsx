import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore  from './store/configureStore';

import routes from './routes';

const store = configureStore(),
rootElement = document.getElementById('root');
let Wrapper;

if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./containers/DevTools').default;

    Wrapper = (
        <div>
            <Router history={browserHistory} routes={routes} />
            <DevTools />
        </div>
    );
} else {
    Wrapper = (
        <div>
            <Router history={browserHistory} routes={routes} />
        </div>
    );
}
// Render the React application to the DOM
ReactDOM.render(
    <Provider store={store}>
        {Wrapper}
    </Provider>,
rootElement
);
