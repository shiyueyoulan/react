import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducer/index';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);
console.log('store', store.getState());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// store.subScribe(()=>{
//   ReactDOM.render(<App />, document.getElementById('root'))
// })
// store.dispatch

serviceWorker.unregister();
