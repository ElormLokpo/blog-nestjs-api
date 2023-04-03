import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import MainRoute from './routes';
import { Provider } from 'react-redux';
import {store} from './services/redux/store'

ReactDOM.render(
<Provider store = {store}>
    <MainRoute />
</Provider>

, document.querySelector('#root'))