import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import countReducers from './reducers/counter/index';
import newsReducers from './reducers/news/index';
 
export default () => {
	const store = createStore(combineReducers({
  countReducers,
  newsReducers
}),applyMiddleware(thunkMiddleware));
    return store;
}