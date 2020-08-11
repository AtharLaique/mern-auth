
import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducer/rootReducers';

const middleware=[thunk];
const initailState={};
const store=createStore(
    combineReducers,
    initailState,
    compose(applyMiddleware(...middleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) 
                    );

export default store;