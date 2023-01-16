import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth/index';
import reducers from './reducers';

const rootReduces = combineReducers( reducers);
export const store = createStore(rootReduces, applyMiddleware(thunk));
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

