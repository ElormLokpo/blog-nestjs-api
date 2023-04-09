import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import MainRoute from './routes';
import { Provider } from 'react-redux';
import {store, persistedStore} from './services/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
<Provider store = {store}>
    <PersistGate persistor = {persistedStore}>
        <MainRoute />
    </PersistGate>
</Provider>

, document.querySelector('#root'))