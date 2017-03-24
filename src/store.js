import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/Index';
//import the data we're going to user
import Data from './Data/data.js'
import UserData from './Data/users.js'
//create object for default data
const defaultState = {
  Data,
  UserData
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
