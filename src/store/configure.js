import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from '../reducer/user';
import tableReducer from '../reducer/table';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return createStore(
        combineReducers({
            user: userReducer,
            table: tableReducer
        }), 
        composeEnhancers(applyMiddleware(thunk))
    );
}
