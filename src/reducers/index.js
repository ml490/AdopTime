import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import animals from './animalsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  animals: animals
});


export default rootReducer;
