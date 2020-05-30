// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './component/app';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './reducer';



// const store = createStore(reducer);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.querySelector('#root')
// )



import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import reduxThunk from 'redux-thunk'

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    composeEnhancers (applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)

// composeEnhancers for REDUX_DEV_EXTENTION