
import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducer/rootReducers';

const middleware=[thunk];
const initailState={};
const store=createStore(
    rootReducers,
    initailState,
    compose(applyMiddleware(...middleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) 
                    );

export default store;