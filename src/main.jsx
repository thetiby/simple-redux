import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore  from './store/configureStore';

import routes from './routes';

const store = configureStore(),
rootElement = document.getElementById('root');
let MainComponent;

if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./containers/DevTools').default;

    MainComponent = (
        <div>
            <Router history={browserHistory} routes={routes} />
            <DevTools />
        </div>
    );
} else {
    MainComponent = <Router history={browserHistory} routes={routes} />;
}
// Render the React application to the DOM
ReactDOM.render(
    <Provider store={store}>
        {MainComponent}
    </Provider>,
    rootElement
);
