import{ createStore, applyMiddleware } from 'redux';
import reducer from '../Reducer/reducer';

export const store = createStore
( reducer,applyMiddleware());