import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { IAppState } from './Store';

interface IProps {
    store: Store<IAppState>;
}

const Root: React.FC<IProps> = props => {
    return (
      <Provider store={props.store}>
        <App />
      </Provider>
    );
};

const store = configureStore();
ReactDOM.render(
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
